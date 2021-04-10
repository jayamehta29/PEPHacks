const puppeteer = require("puppeteer");
// let challenges = require("./challenges");

let id = "kareb38160@astarmax.com";
let pass = "qwerty1234";
let tab;

let dest = "Janakpuri, New Delhi, Delhi";
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
    let alldivs = await tab.$$(".numbered-step-content");
    
})();
// tab.evaluate( function(elem){ return elem.getAttribute("href");  }  ,  createChallengeBtn);
