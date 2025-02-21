class SearchBarPage {
    get searchInput() {
        return $("#inputSearch");
    }

    get searchButton() {
        return $('button[type="button"]');
    }

    get searchPopup() {
        return $("form#szukanie .suggest-list");
    }

    get seeAllButton() {
        return $("//a[contains(text(), 'Zobacz wszystkie')]");
    }

    get notFoundAlert() {
        return $(".not-found");
    }

    async getNotFoundAlertText():Promise<string> {
        const alert = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async getInputValue():Promise<string> {
        const input = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }

    async clearSearchBar() {
        const input = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }

    async clickOnSeeAllButton() {
        const button = await this.seeAllButton;
        await button.waitForDisplayed();
        //await button.scrollIntoView();
        await button.click();
    }

    async searchPopupIsVisible() {
        const popup = await this.searchPopup;
        await popup.waitForDisplayed();
    }

    async typeSearchPhrase(value: string) {
        const input = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);
    
        // Wait until the value in the input field matches the entered value
        await browser.waitUntil(async () => {
            const inputValue = await input.getValue();
            return inputValue === value;
        }, {
            timeout: 3000,
            timeoutMsg: 'The value in the input field was not set within the wait time'
        });
    }

    async clickOnSearchButton() {
        const button = await this.searchButton;
        await button.waitForDisplayed();
        await button.click();
    }

    async searchBarIsVisible() {
        const input = await this.searchInput;
        await expect(input.isDisplayed()).toBeTruthy();
    }
}

export default new SearchBarPage();