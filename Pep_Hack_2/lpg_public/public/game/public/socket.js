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

// ******************************************chat app*************************************************

socket.on("join" , function(username){
    // console.log(dataObj);
    let joinDiv = document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("join");
    joinDiv.textContent = `${username} joined`;
    chatWindow.append(joinDiv);
})

socket.on("leave" , function(dataObj){
    console.log(dataObj);
    let nm = dataObj.userName;
    let leaveDiv = document.createElement("div");
    leaveDiv.classList.add("chat");
    leaveDiv.classList.add("leave");
    leaveDiv.textContent = `${nm} left`;
    chatWindow.append(leaveDiv);
})

socket.on("chatLeft" , function(chatObj){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("left");
    chatDiv.textContent = chatObj.username+ " : " +chatObj.chat;
    chatWindow.append(chatDiv);
})

socket.on("cl",function(c){
    console.log(c);
    ctx.fillStyle=c;
    ctx.fillRect(0,0,canvas.width,canvas.height);

})
