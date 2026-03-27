import { $ } from '@wdio/globals'
import Page from './page.js';


class InventoryPage extends Page {
  
    get inventory() {
        return $('.title');
    }

    get menuButton() {
        return $('#react-burger-menu-btn');
    }

    get sideMenu() {
        return $('.bm-menu');
    }

    get addBackpackBtn() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    async addBackpackToCart() {
        await this.addBackpackBtn.click();
    }

    async openMenu() {
        await this.menuButton.click();
    }




}

export default new InventoryPage();
