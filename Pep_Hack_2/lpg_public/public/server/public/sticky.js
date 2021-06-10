let stickyDiv = document.querySelector("#sticky");

stickyDiv.addEventListener("click", appendSticky);

function appendSticky(elem){
    let sticky = document.createElement("div");
    sticky.classList.add("ticket");
    if(elem){
        sticky.innerHTML = `<div class="ticket-heading">
        <div class="minimize">-</div>
        <div class="close">x</div>
        </div>
        <div class="ticket-content"></div>`
        sticky.querySelector(".ticket-content").append(elem);
    }else{
        sticky.innerHTML = `<div class="ticket-heading">
        <div class="minimize">-</div>
        <div class="close">x</div>
        </div>
        <div class="ticket-content">
        <textarea cols="30" rows="10"></textarea>
        </div>`
    }
    
    

    let stickyHeader = sticky.querySelector(".ticket-heading");
    let isStickyHold = false;
    let initialX;
    let initialY;

    stickyHeader.addEventListener("mousedown" , function(e){
        isStickyHold = true;
        let x = e.clientX;
        let y = e.clientY;
        initialX = x;
        initialY = y;
    })

    stickyHeader.addEventListener("mousemove" , function(e){
        if(isStickyHold){
            let x = e.clientX;
            let y = e.clientY;
            let finalX = x;
            let finalY = y;
    
            let dx = finalX - initialX;
            let dy = finalY - initialY;
    
            // set top and left of sticky
            // getBoundingClient => top left get kr skte hai but set nhi kr skte
            let {top , left} = sticky.getBoundingClientRect();
            
            sticky.style.top = top + dy + "px";
            sticky.style.left = left + dx + "px";
    
            initialX = finalX;
            initialY = finalY;
        }
      })

    stickyHeader.addEventListener("mouseup" , function(){
        isStickyHold = false;
    })
  
    sticky.querySelector(".minimize").addEventListener("click" , function(){
        let stickyContent = sticky.querySelector(".ticket-content");
        stickyContent.classList.contains("hide") ? stickyContent.classList.remove("hide") : stickyContent.classList.add("hide");
    })  
    
    sticky.querySelector(".close").addEventListener("click" , function(){
        sticky.remove();
    })
  
  
  
    document.querySelector("body").append(sticky);     


}