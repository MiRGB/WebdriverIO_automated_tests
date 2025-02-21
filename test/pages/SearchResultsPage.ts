class SearchResultPage {
    get pageTitle() {
        return $("div#page-title h1");
    }

    get productsItem() {
        return $$(".list .swiper-slide");
    }

    get thirdItem() {
        return $("ul.list li:nth-child(3) .lazy");
    }

    async clickOnThirdItem() {
        const item = await this.thirdItem;
        await item.waitForDisplayed();
        await item.click();
    }

    async getNumberOfProducts():Promise<number> {
        const products = await this.productsItem;
        return await products.length;
    }

    async getPageTitle():Promise<string> {
        const h1 = await this.pageTitle;
        await h1.waitForDisplayed();
        return await h1.getText();
    }
}

export default new SearchResultPage();