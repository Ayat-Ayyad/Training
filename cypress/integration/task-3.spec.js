import HomePage from "../support/pages/home-page";
import ProductPage from "../support/pages/product-page";

const homePage = new HomePage();
const productPage = new ProductPage();

it('land on home page and click on monitors filter, verify product details then click on monitor', () => {
    homePage.openUrl();
    homePage.clickOnMonitorLink();
    homePage.verifyTitle();
    homePage.verifyPrice();
    homePage.verifyDesc();
    homePage.clickOnAsusMonitor();

});

it('add to cart', () => {
    productPage.openUrl();
    productPage.addToCart();
    productPage.verifyButtonColor();
});


