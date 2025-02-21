class ProductPage {
    get productTitle() {
        return $(".title-group h1 span:nth-child(1)");
    }

    get addToCartButton() {
        return $("#addToBasket_e_15d7_ebook");
    }

    get productPrice() {
        return $("#cena_e");
    }

    async clickAddToCartButton() {
        const button = await this.addToCartButton;
        await button.waitForDisplayed();
        await button.click();
    }

    async addToCartButtonVisible() {
        const button = await this.addToCartButton;
        await button.waitForDisplayed();
    }

    async getProductTitleValue():Promise<string> {
        const title = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async getProductPrice():Promise<string> {
        const price = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async productTitleVisible() {
        const title = await this.productTitle;
        await title.waitForDisplayed();
    }
}

export default new ProductPage();