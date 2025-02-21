class GlobalPage {
    async openPage(pageURL:string, expectedPageURL:string) {
        await browser.url(pageURL);
        await expect(browser).toHaveUrl(expectedPageURL);
    }
}

export default new GlobalPage();