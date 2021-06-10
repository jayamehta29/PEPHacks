const puppeteer = require("puppeteer");
const fs = require("fs");
// let challenges = require("./challenges");

let id = "kareb38160@astarmax.com";
let pass = "qwerty1234";
let tab;

let dest = "Janakpuri";
let src = "Sonipat";

(async function(){
    let browser = await puppeteer.launch({ 
        headless: false ,
        defaultViewport : null,
        args : ["--start-maximized"],
        // slowMo : 80
    });
    let allPages = await browser.pages();
    tab = allPages[0];
    await tab.goto("https://www.google.com/maps");
    await tab.type("#searchboxinput", dest);
    await tab.click("#searchbox-searchbutton");
    await tab.waitForSelector('.iRxY3GoUYUY__taparea' , {visible:true});
    await tab.waitForTimeout(3000);
    let allOpns = await tab.$$('.iRxY3GoUYUY__taparea');
    await tab.waitForTimeout(2000);
    let dtag = allOpns[0];
    await dtag.click();
    await tab.waitForSelector('#directions-searchbox-0' , {visible:true});
    
    await tab.type("#directions-searchbox-0", src);
    tab.keyboard.press('Enter');
    await tab.waitForSelector('.section-directions-trip-details-link.noprint.mapsConsumerUiCommonButton__blue-button-text' , {visible:true});
    await tab.waitForTimeout(2000);
    await tab.click(".section-directions-trip-details-link.noprint.mapsConsumerUiCommonButton__blue-button-text");
    console.log("directions opened");

    await tab.waitForSelector('.directions-mode-step-summary .numbered-step-content' , {visible:true});
    await tab.waitForTimeout(2000);
    let dirn = await tab.$$(".directions-mode-step-summary .numbered-step-content");
    let directions = [];
    let text;
    for(let i=0;i<dirn.length;i++){
        text = await tab.evaluate(function(elem){ return elem.textContent},dirn[i]);
        // let sl = speedlimit(text);
        await tab.waitForTimeout(2000);
        directions.push(text);
       
        await tab.waitForTimeout(2000);
        console.log(text); 
    }
    fs.writeFileSync('./directions.js', JSON.stringify(directions, null, 2));
    await tab.waitForTimeout(5000);
    await browser.close();

})();

// async function speedlimit(text){
    
// }
// tab.evaluate( function(elem){ return elem.getAttribute("href");  }  ,  createChallengeBtn);
