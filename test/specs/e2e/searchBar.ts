import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchBarPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import { helionHomeURL, helionSearchURL, notFoundURL, searchPageURL } from "../../config/pagesURL"
import { notFoundMessage, incorrectProductName, searchPhrase, searchResultTitle } from "../../config/data";

describe("E2E - SearchBar", async () => {
    it("Should open helion home page and verify url and visible search bar", async () => {
        await GlobalPage.openPage(helionHomeURL, helionHomeURL);
        await SearchBarPage.searchBarIsVisible();
    })

    it("Should click on search button and verify url", async () => {
        await SearchBarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(helionSearchURL);
    })

    it("Should type search value and verify visible popup", async () => {
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await SearchBarPage.searchBarIsVisible();
    })

    it("Should click on see all button", async () => {
        await SearchBarPage.clickOnSeeAllButton();
        await expect(browser).toHaveUrl(searchPageURL);
    })

    it("Should verify correctly title and number of products", async () => {
        const title:string = await SearchResultsPage.getPageTitle();
        const numberOfProducts:number = await SearchResultsPage.getNumberOfProducts();
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfProducts).toEqual(25);
    })

    it("Should clear input value", async () => {
        await SearchBarPage.clearSearchBar();
        await expect(await SearchBarPage.getInputValue()).toContain("");
    })

    it("Should type incorrect name and verify alert", async () => {
        await SearchBarPage.typeSearchPhrase(incorrectProductName);
        await SearchBarPage.clickOnSearchButton();
        await expect(await SearchBarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })

    it("Should clear input and click on search button", async () => {
        await SearchBarPage.clearSearchBar();
        await SearchBarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(notFoundURL);
        await expect(await SearchBarPage.getInputValue()).toContain("");
    })
})