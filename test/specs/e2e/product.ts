import { helionHomeURL, searchProductURL, cartPageURL } from "../../config/pagesURL";
import { searchPhrase, alertMessage, emptyCartMessage } from "../../config/data";
import SearchBarPage from "../../pages/components/SearchBarPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

describe("E2E - Product and Cart", async () => {
    let productTitle:string = "";
    let productPrice:string = "";
    
    before(() => {
        browser.url(helionHomeURL);
    })

    it("Should type search phrase and click search button", async () => {
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await SearchBarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(searchProductURL);
    })

    it("Should click on first product", async () => {
        await SearchResultsPage.clickOnThirdItem();
        await ProductPage.productTitleVisible();
        await ProductPage.addToCartButtonVisible();
        productTitle = await ProductPage.getProductTitleValue();
        productPrice = await ProductPage.getProductPrice();
    })

    it("Should click on add to cart button", async () => {
        await ProductPage.clickAddToCartButton();
        await expect(browser).toHaveUrl(cartPageURL);
        await expect(await CartPage.getSuccesAlertValue()).toContain(productTitle);
        await expect(await CartPage.getTotalPriceValue()).toContain(productPrice);
    })

    it("Should delete product from cart", async () => {
        await CartPage.clickCheckbox();
        await CartPage.clickDeleteSelected();
        await expect(await browser.getAlertText()).toContain(alertMessage);
        await CartPage.acceptDeleteAlert();
        await expect(await CartPage.getEmptyCartMessage()).toContain(emptyCartMessage)
    })
})