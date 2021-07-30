
describe('Test Suite 2', () => {

    beforeEach(() => {
        cy.visit('https://www.seleniumeasy.com/test/table-search-filter-demo.html');
    });

    it('Test Case 1: To search for an entry in the table. ', () => {
        cy.get('#task-table-filter').type('Bug');
        cy.get('td').should('contain', 'Bug')
    });

    it('Test Case 2:to check that filters are disabled before clicking on filter icon, then filter by username', () => {
        
        cy.get('.form-control').should('be.disabled');
     
        cy.get('.btn-filter').click();
        cy.get('[placeholder="Username"]').type('jacobs');
        
        cy.get('td').should('contain', 'jacobs')

    });
});

