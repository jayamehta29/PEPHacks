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
        // console.log(userList);
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

    socket.on("undo",function(obj){
        console.log(obj);
        socket.broadcast.emit("undoLine",obj);
    });

    socket.on("redo",function(obj){
        socket.broadcast.emit("redoLine",obj);
    });

})

server.listen(5500, function(){
    console.log("Server started");
})