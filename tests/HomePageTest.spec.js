const {test,expert, expect} = require('@playwright/test');
test('Home Page',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    const pageTitle=await page.title();
    console.log('page title is:', pageTitle);
    await expect(page).toHaveTitle('STORE');
   await page.close;

})