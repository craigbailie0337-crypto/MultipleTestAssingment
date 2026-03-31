import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
   
    get shoppingCartIcon() {
        return $('.shopping_cart_link');
    }

    get removeBtnBackpack() {
        return $('//button[@id="remove-sauce-labs-backpack"][text()="Remove"]');
    }

    get continueShoppingBtn() {
        return $('//button[@id="continue-shopping"][text()="Continue Shopping"]');
    }

    get checkOutBtn() {
        return $('//button[@id="checkout"][text()="Checkout"]');
    }

     get cartItem() {
        return $('[data-test="inventory-item-name"]');
    }

    async openCart() {
        await this.shoppingCartIcon.click();
    }

    async removeBackpack() {
        await this.removeBtnBackpack.click();
    }

    async continueShopping() {
        await this.continueShoppingBtn.click();
    }

    async checkout() {
        await this.checkOutBtn.click();
    }

      async addItemCart() {
        await $('#add-to-cart-sauce-labs-backpack').click();
    }

    async checkCartLinks() {
        await this.openCart();
        await expect(browser).toHaveUrlContaining('cart');
        await expect(this.removeBtn).toBeDisplayed();
        await expect(this.removeBtn).toHaveText('Remove');
        
        await this.removeItem();
        await expect(this.removeBtn).not.toBeDisplayed();

        await this.continueShopping();
        await expect(browser).toHaveUrlContaining('inventory');

        await this.checkout();
        await expect(browser).toHaveUrlContaining('checkout');
    }

   
    

}

export default new CartPage();