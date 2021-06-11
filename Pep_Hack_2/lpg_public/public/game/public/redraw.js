
function redrawLine(){
    ctx.lineCap = 'round';
    for(let i=0 ; i<db.length ; i++){
        let line = db[i];

        for(let j=0 ; j<line.length ; j++){

            let pointObject = line[j];
            if(pointObject.type=="md"){
                ctx.strokeStyle = pointObject.color;
                ctx.lineWidth = pointObject.width;
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else if(pointObject.type=="mm"){
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
    }
}