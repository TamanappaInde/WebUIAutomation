const base = require('@playwright/test');

const HomePage =
    require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');

exports.test = base.test.extend({

    homePage: async ({ page }, use) => {
        await use(
            new HomePage(page)
        );
    },

    searchResultsPage: async ({ page }, use) => {
        const searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    }

});

exports.expect = base.expect;