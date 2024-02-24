import puppeteer from "puppeteer";

async function reconstructPage(pageData:any)  {
    // Launch a new browser instance
     // Launch a new browser instance
     const browser = await puppeteer.launch();

     // Create a new page instance
     const page = await browser.newPage();
 
     // Set the content of the page based on the received data
     await page.setContent(pageData.content);
 
     // Return the reconstructed page object
     return page;
}

export default reconstructPage