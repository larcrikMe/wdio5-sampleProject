import Page from '../pages/page';

class HomePage extends Page {
    
    get title()           { return $('title'); }
    get homeTitle()       { return $('.home-title'); }  
}

export default new HomePage();