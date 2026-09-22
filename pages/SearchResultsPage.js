const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
    constructor(page) {
        super(page);

        this.searchResultsHeading = page.locator("//span[@class='a-color-state a-text-bold']").first();

        this.productResults = page.locator("//span[@data-component-type='s-messaging-widget-results-header']")
    }


}
