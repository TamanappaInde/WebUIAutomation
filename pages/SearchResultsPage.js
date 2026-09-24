const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
    constructor(page) {
        super(page);

        this.searchResultsHeading = page.locator("//span[@class='a-color-state a-text-bold']").first();

        this.productResults = page.locator("//span[@data-component-type='s-messaging-widget-results-header']");

        this.firstProduct = this.productResults.first();

        this.firstProductTitle = this.firstProduct.locator("//span[contains(text(), 'Redmi Note 17 Pro 5G (Cloud Blue, 8G…')]").first();

        this.productLink = this.firstProduct.locator("//div[@class='_c2Itd_imageWrapper_1Mnv7']//a[@class='a-spacing-none a-link-normal _c2Itd_link_j7UN_']").first();

    }

    async getSearchResultsCount() {
        return await this.productResults.count();
    }

    async getFirstProductTitle() {
        return await this.getText(this.firstProductTitle);
    }

    async selectFirstProduct() {
        const context = this.page.context();
        const [newPage] = await Promise.all([
            context.waitForEvent('page'), this.firstProductLink.click()
        ])

        await newPage.waitForLoadState('domcontentloaded');

        return new ProductDetailsPage(newPage);
    }

}

module.exports = SearchResultsPage;
