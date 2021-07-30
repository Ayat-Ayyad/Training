import HomePage from "../support/pages/home-page";

const homePage = new HomePage();

describe('To test monitors filter, verify product details then click on a monitor', () => {

    beforeEach(() => {
        homePage.openUrl();
        homePage.clickOnMonitorLink();
    });

    it(' verify product title, price & desc', () => {
        homePage.verifyTitle();
        homePage.verifyPrice();
        homePage.verifyDesc();
    });

    it('should redirect to ASUS monitor page', () => {
        homePage.clickOnAsusMonitor();

    });
});

// it('test', () => {
//     homePage.openUrl();
//     homePage.clickOnMonitorLink();
//     homePage.verifyTitle();
//     homePage.verifyPrice();
//     homePage.verifyDesc();
//     homePage.clickOnAsusMonitor();
// });