class Page {
    
    get pageHeading() { return $('h1'); }

    open(path) {
        path = path || '';
        browser.url('/' + path);
    }

    getTitle() {
        return browser.getTitle();
    }

    getUrl() {
        return browser.getUrl();
    }

    clickOnLink(text) {
        $(`a=${text}`).waitForExist();
        $(`a=${text}`).click();
    }

    clickButtonWithText(buttonName) {
        let buttonToClick = $(`button=${buttonName}`);
        buttonToClick.waitForDisplayed();
        buttonToClick.click();
    }

    getHeadingText() {
        this.pageHeading.waitForExist();
        return this.pageHeading.getText();
    }
}

export default Page;