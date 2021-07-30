const URL = 'https://www.demoblaze.com/prod.html?idp_=14';
const ADD_TO_CART_BTN = '.btn-success';

export default class ProductPage {

    openUrl(){
        cy.visit(URL);
    };

    addToCart(){
        cy.get(ADD_TO_CART_BTN).click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })
        cy.on('window:confirm', () => true);
    };

    verifyButtonColor(){
        cy.get(ADD_TO_CART_BTN).should('have.css', 'background-color' , 'rgb(92, 184, 92)')
    }
}


