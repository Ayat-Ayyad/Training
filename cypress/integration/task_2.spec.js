import data from '../fixtures/data.json';
// import 'cypress-file-upload';

describe('Cypress Task 2: Test Suite 1', () => {
    it('Test Case 1: Fill the form using the data stored in data.json file.', () => {
        cy.visit('https://demoqa.com/text-box');
        // cy.fixture('data.json').then((data) => {})
        cy.get('#userName').type(data.FullName);
        cy.get('#userEmail').type(data.Email);
        cy.get('#currentAddress').type(data.CurrentAddress);
        cy.get('#permanentAddress').type(data.PermanentAddress);
        cy.get('#submit').click();
        cy.get('#name').should('contain', data.FullName);
        cy.get('#email').should('contain', data.Email);
        cy.get('p#currentAddress').should('contain', data.CurrentAddress);
        cy.get('p#permanentAddress').should('contain', data.PermanentAddress)
    });
});

describe('Cypress Task 2: Test Suite 2', () => {
    it('Test Case 21: To upload a file successfully', () => {
        cy.visit('https://demoqa.com/upload-download');
        cy.fixture('sampleFile.jpeg').then((image) => {})
        cy.get('#uploadFile').attachFile('sampleFile.jpeg')
        cy.get('#uploadedFilePath').should('contain', 'sampleFile.jpeg')
    });
});

describe('Cypress Task 2: Test Suite 3', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/angularjs/#/');
    });
    it('Add, check, filter, check displayed', () => {
//Add two items to the todo list
        // cy.fixture('data.json').then((data) => {})
        cy.get('.new-todo').type("Item 1{enter}").type("Item 2{enter}");
        // cy.get('.new-todo').type(data.todo2).type('{enter}');
        //Assertions
        cy.get('.ng-binding').should('contain', 'Item 1');
        cy.get('.ng-binding').should('contain', 'Item 2');

//Mark an item as completed
        cy.contains('li','Item 1').find('.toggle').click();
        //Assertions
        cy.contains('li','Item 1').find('.toggle').should('be.checked');

//Filters the list by "Completed"
cy.get('[href="#/completed"]').click()
//cy.contains('a','Completed').click()
       // cy.get('ul.filters > :nth-child(3)').click();
//Checks that only the completed item is displayed
    cy.get('.ng-binding').should('contain', 'Item 1').should('exist');
    cy.get('.ng-binding').should('not.contain', 'Item 2')

    });    

});

{/* <input class="toggle ng-valid ng-dirty ng-valid-parse ng-touched" type="checkbox" ng-model="todo.completed" ng-change="toggleCompleted(todo)"></input> */}