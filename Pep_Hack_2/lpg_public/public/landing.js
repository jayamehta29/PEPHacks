let wb = document.querySelector(".wb");
let wbs = document.querySelector(".wbs");
let wbg = document.querySelector(".wbg");

wb.addEventListener("click" , function(){
    window.location.assign("/normal/whiteboard.html");
})

wbs.addEventListener("click" , function(){
    window.location.assign("./server/public/index.html");
})

wbg.addEventListener("click" , function(){
    window.location.assign("./game/public/index.html");
})