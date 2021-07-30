import ProductPage from "../support/pages/product-page";

const productPage = new ProductPage();

describe('To Test Add to Cart functionality', () => {

    beforeEach(() => {
        productPage.openUrl();
    });

    it('should add item to cart & give a success message', () => {
        productPage.addToCart();
    });

    it('Test add to cart button color', () => {
        productPage.verifyButtonColor();
    });
});


