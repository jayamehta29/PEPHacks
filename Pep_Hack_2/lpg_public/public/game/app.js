const express = require("express");
const{ Server } = require("socket.io");

const app = express();
const http = require("http");
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

let userList = []; // online ppl
let userObject;
io.on("connection", function(socket){
    socket.on("userConnected" , function(username){
        userObject = { id: socket.id , userName : username};
        userList.push(userObject);
        // console.log(userObject);
        // for self
        socket.emit("online-list" , userList);

        // broadcast a message to all other clients except sender
        socket.broadcast.emit("join" , username);
    })

    socket.on("mousedown",function(pointObject){
        // io.emit("md",pointObject);
        socket.broadcast.emit("md",pointObject);
        
    });
    socket.on("mousemove",function(pointObject){
        // io.emit("mm",pointObject);
        socket.broadcast.emit("mm",pointObject);
    });
    socket.on("clear",function(){
        socket.broadcast.emit("cl");
    });

    socket.on("chat" , function(chatObj){
        socket.broadcast.emit("chatLeft" , chatObj);
    })
    socket.on("disconnect" , function(){
        let leftUserObj;
        let remainingUsers = userList.filter(function(userObj){
            if(userObj.id == socket.id){
                leftUserObj = userObj;
                return false;
            }
            return true;
        })
        userList = remainingUsers;
        socket.broadcast.emit("leave" , leftUserObj);
    })

})


server.listen(5000, function(){
    console.log("Server started");
})