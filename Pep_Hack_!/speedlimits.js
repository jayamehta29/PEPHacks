let SL= [
    {
        "Place": "Sonipat",
        "Speed": "50",
    },
    {
        "Place": "NH44",
        "Speed": "60",
    },
    {
        "Place":"Janti Kalan",
        "Speed":"40",
    }
]
module.exports=SL; 

// for(let i=0;i<dirn.length;i++){
//     text = await tab.evaluate(function(elem){ return elem.textContent},dirn[i]);
//     await tab.waitForTimeout(2000);
//     let sl = speedlimit(text);
//     await tab.waitForTimeout(2000);
//     if(sl.length==0){
//         directions.push(text);
//     }else{
//         directions.push(text + sl);
//     }
//     await tab.waitForTimeout(2000);
//     console.log(text); 
// }
// async function speedlimit(text){
//     let placeName = splm["PLace"];
//     let speedlimit = splm["Speed"];
//     words = text.split(" ");
//     for(let i=0;i<words.length;i++){
//         for(let j=0;j<splm.length;i++){
//             if(word[i]==splm[j].placeName){
//                 return splm[j].speedlimit;
//             }
//         }
//     }
//     return 0;
// }