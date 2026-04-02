import { $, $$ } from '@wdio/globals'
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

    get cartBadge() {
        return $('[data-test="shopping-cart-badge"]');
    }

     get cartIconOneItem() {
        return $('//span[@data-test="shopping-cart-badge"][contains(text(), "1")]');
    }

    get allAddToCartButtons() {
        return $$('button[id^="add-to-cart"]');
    }

    get removeBackpackBtn() {
        return $('#remove-sauce-labs-backpack');
    }

    get allRemoveButtons() {
        return $$('button[id^="remove"]');
    }

    async removeAllItems() {
        const buttons = await this.allRemoveButtons;
        for (const btn of buttons) {
            await btn.click();
        }
    }

    async removeOneItem() {
        await this.removeBackpackBtn.click();
    }

    async addAllItemsToCart() {
        const buttons = await this.allAddToCartButtons;
        for (const btn of buttons) {
            await btn.click();
        }
        return buttons.length.toString();
    }


    async addRandomItems() {
        const buttons = await this.allAddToCartButtons;
        const count = Math.floor(Math.random() * buttons.length) + 1;
        for(let i = 0; i < count; i++) {
            await buttons[i].click();
        }
        return count.toString();
    }

    async addBackpackToCart() {
        await this.addBackpackBtn.click();
    }

    async openMenu() {
        await this.menuButton.click();
    }






}

export default new InventoryPage();
