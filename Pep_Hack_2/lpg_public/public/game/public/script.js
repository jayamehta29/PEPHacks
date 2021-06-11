
let canvas = document.querySelector("#canvas");

let { top : canvasTop } = canvas.getBoundingClientRect();

canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight - (canvasTop+5); 

let pointObject;
window.addEventListener("resize" , function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - (canvasTop+5);  
    redrawLine();   
})

let ctx = canvas.getContext("2d");
ctx.lineCap = 'round';

let db=[];
let redoDB = [];
let line=[];
let username = prompt("Enter Your Name ");


let isMouseDown = false;
socket.emit("userConnected", username);
let onlineList = document.querySelector(".online-list");
// console.log(onlineList);

canvas.addEventListener("mousedown" , function(e){
    if(redoDB.length){
        redoDB = [];
    }

    isMouseDown = true;
    let x = e.clientX; 
    let y = e.clientY - canvasTop;
    ctx.beginPath();
    ctx.moveTo(x,y);

    pointObject = {
        type:"md",
        x:x,
        y:y,
        color:ctx.strokeStyle,
        width:ctx.lineWidth,
        identifier : "mousedown"
    }
    // socket.emit("clicked",{username,...pointObject});
    line.push(pointObject);
    socket.emit("mousedown",pointObject);
})

canvas.addEventListener("mousemove" , function(e){
    if(isMouseDown){
        let x = e.clientX;
        let y = e.clientY - canvasTop;
        ctx.lineTo(x,y);
        ctx.stroke();

        let pointObject = {
            type:"mm",
            x:x,
            y:y,
            identifier : "mousedown"
        }
        
        line.push(pointObject);
        socket.emit("mousemove",pointObject);
    }
})

canvas.addEventListener("mouseup" , function(e){
    isMouseDown = false;
    db.push(line);
    line = [];
    // console.log(db);
})


// canvas.addEventListener("click",function(bgc){
//     // console
//     ctx.fill();
// })

