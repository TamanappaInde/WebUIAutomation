const BasePage = require('./BasePage');

class HomePage extends BasePage {

    constructor(page) {
        super(page);

    }

    async launchAmazon() {
        await this.navigate('https://www.amazon.in');
    }

    async searchProduct() {
        await this.click("#twotabsearchtextbox");
        await this.fill("#twotabsearchtextbox", "Mobile Under 40k");
        await this.click("#nav-search-submit-button");

    }




}

module.exports = HomePage;

