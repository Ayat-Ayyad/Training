import data from '../../fixtures/data.json'

const URL = 'https://www.demoblaze.com/index.html';
const MONITORS_LINK = '.list-group-item';
const TITLE = '.card-title';
const DESC = '.card-text';
const ASUS_MONITOR = '.hrefch';

export default class HomePage {

    openUrl(){
        cy.visit(URL);
    };

    clickOnMonitorLink(){
        cy.get(MONITORS_LINK).last().click();
        cy.contains('h5', '$400').should('contain', '$400')
    };

    verifyTitle(){
       cy.get(TITLE).last().should('be.visible').should('contain', data.title)
    };

    verifyPrice(){
        cy.contains('h5', data.price).should('contain', data.price)
    };

    verifyDesc(){
       cy.get(DESC).last().should('contain', data.desc);
    };

    clickOnAsusMonitor(){
        cy.get(ASUS_MONITOR).last().click()
        cy.get('.name').should('contain', 'ASUS Full HD')
    }
}
