import Page from './page.js';


class MenuPage extends Page {
    get burgerBtn() {
        return $('#react-burger-menu-btn');
    }

    get closeBtn() {
        return $('#react-burger-cross-btn');
    }

    get allItemsLnk() {
        return $('//a[@id="inventory_sidebar_link"][text()="All Items"]');
    }

    get aboutLnk() {
        return $('//a[@id="about_sidebar_link"][text()="About"]');
    }

    get logoutLnk() {
        return $('//a[@id="logout_sidebar_link"][text()="Logout"]');
    }

    get resetLnk() {
        return $('//a[@id="reset_sidebar_link"][text()="Reset App State"]');
    }

    async openMenu() {
        await this.burgerBtn.click();
        await this.closeBtn.waitForDisplayed();
    }

    async closeMenu() {
        await this.closeBtn.click();
        await this.burgerBtn.waitForDisplayed();
    }

    async logout() {
        await this.logoutLink.click();
    }

       
    async checkMenuLinks() {
        await expect(this.allItemsLnk).toBeDisplayed();
        await expect(this.aboutLnk).toBeDisplayed();
        await expect(this.logoutLnk).toBeDisplayed();
        await expect(this.resetLnk).toBeDisplayed();
    }

        

    
        
}

   export default new MenuPage(); 
