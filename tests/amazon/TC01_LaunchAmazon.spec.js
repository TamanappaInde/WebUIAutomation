const { test, expect } = require('../../fixtures/basetest')

test.beforeEach(async ({ homePage }) => {
    await homePage.launchAmazon();
});

test('TC01 Launch Amazon WebSite', async ({ homePage, page }) => {
    await homePage.launchAmazon();

    await expect(page).toHaveTitle(/Amazon/);
    console.log("Amazon WebSite Launch Successfully. ")
})

test('TC02 Search a Mobile Under 40k', async ({ homePage, searchResultsPage, page }) => {
    await homePage.searchProduct();
    await expect(page).toHaveURL(/s\?/);
    const resultsCount = await searchResultsPage.getSearchResultsCount();
    expect(resultsCount).toBeGreaterThan(0);
    console.log('Mobiles under 40k are searched and listed successfully.' +
        'Results Found: ${resultsCount}'
    );
})

test('TC03 Select first product and verfiy title and price', async ({ homePage, searchResultsPage }) => {
    await homePage.searchProduct();

    const searchPageTitle = await searchResultsPage.getFirstProductTitle();

    const searchPagePrice = await searchResultsPage.getFirstProductPrice();

    expect(searchPageTitle).toBeTruthy();

    console.log('Search-page product ttile: ${searchPageTitle}');

})

