import HomePage from '../pages/homePage';

describe ('NAVIGATE to homepage - ', () => {

    before(() => {
        HomePage.open();
        //browser.url(browser.config.baseUrl);
    });

    it('Should check title of the page ', () => {
        expect(HomePage.getHeadingText()).to.equal('Welcome to the-internet');
    });

});