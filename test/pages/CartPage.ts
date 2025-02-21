class CartPage {
    get succesAlert() {
        return $(".successbox p");
    }

    get totalPrice() {
        return $("#cart-edit-summary");
    }

    get checkbox() {
        return $("th .input");
    }

    get deleteSelectedLabel() {
        return $("#usun span");
    }

    get emptyCartMessage() {
        return $(".infobox p");
    }

    async getEmptyCartMessage():Promise<string> {
        const alert = await this.emptyCartMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async clickDeleteSelected() {
        const label = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }

    async clickCheckbox() {
        const checkbox = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }

    async getTotalPriceValue():Promise<string> {
        const price = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getSuccesAlertValue():Promise<string> {
        const alert = await this.succesAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async acceptDeleteAlert() {
        await browser.acceptAlert();
    }
}

export default new CartPage();