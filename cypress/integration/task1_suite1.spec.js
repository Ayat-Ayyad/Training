describe('Test Suite 1', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });
    it('Test Case 1: Submit form with valid credentials & check validation msg ', () => {

        cy.get('#username').type('tomsmith');   
        cy.get('#password').type('SuperSecretPassword!');

        cy.get('.fa').click()

        cy.get('#flash').should('contain', 'You logged into a secure area!');
    });

    it('Test Case 2: Logout Successfully ', () => {

        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');

        cy.get('.fa').click();
        cy.get('#flash').should('contain', 'You logged into a secure area!')

        cy.get('.icon-2x').click();
        cy.get('#flash').should('contain', 'You logged out of the secure area!')
    });

    it('Test Case 3: Submit form with invalid crdentials and check error message', () => {
        cy.get('#username').type('invalid username');
        cy.get('#password').type('invalid password');

        cy.get('.fa').click()
        cy.get('#flash').should('contain', 'Your username is invalid')
    });
});




