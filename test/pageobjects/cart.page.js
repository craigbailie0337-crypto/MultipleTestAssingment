import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
   
    get shoppingCartIcon() {
        return $('.shopping_cart_link');
    }

    get removeBtn() {
        return $('//button[@id="remove-sauce-labs-backpack"][text()="Remove"]');
    }

    get continueShoppingBtn() {
        return $('//button[@id="continue-shopping"][text()="Continue Shopping"]');
    }

    get checkOutBtn() {
        return $('//button[@id="checkout"][text()="Checkout"]');
    }

    async openCart() {
        await this.shoppingCartIcon.click();
    }

    async removeItem() {
        await this.removeBtn.click();
    }

    async continueShopping() {
        await this.continueShoppingBtn.click();
    }

    async checkout() {
        await this.checkOutBtn.click();
    }

    async checkCartLinks() {
        await CartPage.openCart();
        await expect(browser).toHaveUrlContaining('cart');
        await expect(CartPage.removeBtn).toBeDisplayed();
        await expect(CartPage.removeBtn).toHaveText('Remove');
        
        await CartPage.removeItem();
        await expect(CartPage.removeBtn).not.toBeDisplayed();

        await CartPage.continueShopping();
        await expect(browser).toHaveUrlContaining('inventory');

        await CartPage.checkout();
        await expect(browser).toHaveUrlContaining('checkout');
    }

    

}

export default new CartPage();