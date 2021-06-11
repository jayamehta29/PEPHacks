let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let trashbtn = document.querySelector("#trash");
let paintbtn = document.querySelector("#paint");

let pencilOptions = pencil.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");
let paintoptions = paintbtn.querySelector(".tool-options");

let pencilSizeInput = pencil.querySelector("input");
let eraserSizeInput = eraser.querySelector("input");

let pencilColors = pencil.querySelectorAll(".pencil-colors div");
let paintColors = document.querySelectorAll(".paint-colors div");


let activeTool = "pencil";

let currentPencilSize = 1;
let currentEraserSize = 1;
let currentPencilColor = "black";
let cuurentPaint;


for(let i=0 ; i<pencilColors.length ; i++){
    pencilColors[i].addEventListener("click" , function(e){
        let selectedPencilColor = e.target.className;
        ctx.strokeStyle = selectedPencilColor;
        currentPencilColor = selectedPencilColor;
    })
}


pencilSizeInput.addEventListener("change" , function(){
    let updatedPencilSize = pencilSizeInput.value; 
    ctx.lineWidth = updatedPencilSize;
    currentPencilSize = updatedPencilSize;
})

eraserSizeInput.addEventListener("change" , function(){
    let updatedEraserSize = eraserSizeInput.value;
    ctx.lineWidth = updatedEraserSize;
    currentEraserSize = updatedEraserSize;
})


pencil.addEventListener("click" , function(){
    if(activeTool == "pencil"){
        // pencil options open ya close honge
        if(pencilOptions.classList.contains("hide")){
            pencilOptions.classList.remove("hide");
            paintoptions.classList.add("hide");
        }
        else{
            pencilOptions.classList.add("hide");
        }
    }
    else{
        activeTool = "pencil";
        ctx.strokeStyle = currentPencilColor;
        ctx.lineWidth = currentPencilSize;
        eraserOptions.classList.add("hide");
        
    }
})
eraser.addEventListener("click" , function(){
    if(activeTool == "eraser"){
        // eraser options open ya close honge
        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide");
            paintoptions.classList.add("hide");
        }
        else{
            eraserOptions.classList.add("hide");
        }
    }
    else{
        activeTool = "eraser";
        ctx.strokeStyle = "white";
        ctx.lineWidth = currentEraserSize;
        pencilOptions.classList.add("hide");
       
    }
})

trashbtn.addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    socket.emit("clear");
})

// //paintoptions
// for(let i=0 ; i<paintColors.length ; i++){
//     paintColors[i].addEventListener("click" , function(e){
//         let selectedPaint = e.target.className;
//         // ctx.beginPath();
//         ctx.fillStyle = selectedPaint;;
//         // ctx.fill(0, 0, canvas.width, canvas.height);
        
//         // ctx.fillRect(0, 0, canvas.width, canvas.height);
//         currentPaint = selectedPaint;
        
//     })
// }

paintbtn.addEventListener("click",function(){
    if(activeTool = "paintbtn"){
        if(paintoptions.classList.contains("hide")){
            paintoptions.classList.remove("hide");
            pencilOptions.classList.add("hide");
            eraserOptions.classList.add("hide");
        }
        else{
            paintoptions.classList.add("hide");
        }
    }else{
        activeTool="paintbtn";
        paintoptions.classList.add("hide");
    }
    
    

    // eraserOptions.classList.add("hide");
})
console.log(paintColors.length)
for(let i=0 ; i<paintColors.length ; i++){
    paintColors[i].addEventListener("click" , function(e){
        console.log("obh")
        let selectedPaintColor = e.target.className;
        ctx.fillStyle = selectedPaintColor;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        socket.emit("fill",selectedPaintColor);
        currentPaint=selectedPaintColor
    })
}