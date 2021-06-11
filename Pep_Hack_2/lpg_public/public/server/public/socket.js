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

// socket.on("undoLine",function(line){
//    console.log(line);
   
    
// });

// socket.on("redoLine",function(line){
    
    
// });