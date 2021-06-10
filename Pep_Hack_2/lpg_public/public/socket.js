socket.on("md",function(lineinfo){
    let {x, y, color, width} = lineinfo;
    ctx.strokeStyle = color;
    ctx.lineWidth = width
    ctx.beginPath();
    ctx.moveTo(x,y);
});

socket.on("mm",function(lineinfo){
    let {x, y} = lineinfo;
    ctx.lineTo(x,y);
    ctx.stroke();
});

socket.on("cl",function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// chat app*************************************************


let onlineList = document.querySelector(".online-list");
// it will send a message to server
// socket.emit("userConnected" , username);


socket.on("leave" , function(dataObj){
    let leaveDiv = document.createElement("div");
    leaveDiv.classList.add("chat");
    leaveDiv.classList.add("leave");
    leaveDiv.textContent = `${dataObj.username} left chat`;
    chatWindow.append(leaveDiv);
    deleteFromOnlineList(dataObj.id);
})

socket.on("join" , function(username){
    let joinDiv = document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("join");
    joinDiv.textContent = `${username} joined chat`;
    chatWindow.append(joinDiv);
    // addInOnlineList(dataObj);
})

socket.on("chatLeft" , function(chatObj){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("left");
    chatDiv.textContent = chatObj.username+ " : " +chatObj.chat;
    chatWindow.append(chatDiv);
})

socket.on("online-list" , function(userList){

    for(let i=0 ; i<userList.length ; i++){
        if(userList[i].id != socket.id){
            let userDiv = document.createElement("div");
            userDiv.classList.add("user");
            userDiv.setAttribute("id" , userList[i].id);
        
            userDiv.innerHTML = ` <div class="user-image">
             <img src="default.jpg" alt="">
            </div>
             <div class="user-name">${userList[i].username}</div>`

             onlineList.append(userDiv);
        }
    }
})

function deleteFromOnlineList(id){
    document.querySelector(`#${id}`).remove();
}
function addInOnlineList(userObj){
    let userDiv = document.createElement("div");
            userDiv.classList.add("user");
            userDiv.setAttribute("id" , userObj.id);
        
            userDiv.innerHTML = ` <div class="user-image">
             <img src="default.jpg" alt="">
            </div>
             <div class="user-name">${userObj.username}</div>`

             onlineList.append(userDiv);
}
