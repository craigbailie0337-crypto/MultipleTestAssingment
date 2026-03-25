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

    async openMenu() {
        await this.menuButton.click();
    }



}

export default new InventoryPage();
