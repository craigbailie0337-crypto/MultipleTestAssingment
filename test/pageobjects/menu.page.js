

class MenuPage extends Page {
    get burgerBtn() {
        return $('#react-burger-menu-btn');
    }

    get closeBtn() {
        return $('#react-burger-cross-btn');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    get allItems() {
        return $('//a[@id="inventory_sidebar_link"][text()="All Items")]');
    }

    get aboutLink() {
        return $('//a[@id="about_sidebar_link"][text()="About"]');
    }

    get logoutLnk() {
        return $('//a[@id="logout_sidebar_link"][text()="Logout"]');
    }

    get resetAppSt() {
        return $('//a[@id="reset_sidebar_link"][text()="Reset App State"]');
    }

    async openMenu() {
        await this.burgerBtn.click();
    }

    async closeMenu() {
        await this.closeBtn.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async testlinksHM() {
        for (let i = 0; i < ['All Items', 'About', 'Logout', 'Reset App State'].length; i++) {
            await expect($(`text=${['All Items', 'About', 'Logout', 'Reset App State'][i]}`)).toBeDisplayed();
        }
    }
        // const menuLinks = [
        //     {selector: '#inventory_sidebar_link', expectedText: 'All Items'},
        //     {selector: '#about_sidebar_link', expectedText: 'About'},
        //     {selector: '#logout_sidebar_link', expectedText: 'Logout'},
        //     {selector: '#reset_sidebar_link', expectedText: 'Reset App State'} 

        // ];

        // for (const link of menuLinks) {
        //     const element = await $(link.selector);
        //     await expect(element).toBeDisplayed();
        //     await expect(element).toHaveText(link.expectedText);
        

    
        


   export default new MenuPage(); 
