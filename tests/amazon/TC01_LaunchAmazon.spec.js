const { test, expect } = require('../../fixtures/basetest')

test.beforeEach(async ({ homePage }) => {
    await homePage.launchAmazon();
});

test('TC01 Launch Amazon WebSite', async ({ homePage, page }) => {
    await homePage.launchAmazon();

    await expect(page).toHaveTitle(/Amazon/);
    console.log("Amazon WebSite Launch Successfully. ")
})

test('TC02 Search a Mobile Under 40k', async ({ homePage, page }) => {
    await homePage.searchProduct();
    console.log("Mobiles under 40k are searched and listed successfully.");
})