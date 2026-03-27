import { browser, $ } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import CartPage from '../pageobjects/cart.page.js';
import InventoryPage from '../pageobjects/Inventory.page.js';




describe('Shopping Cart Tests on SauceDemo', () => {

    it('Should log in and add item to cart', async () => {
        await browser.url('https://www.saucedemo.com/');
            await LoginPage.login('standard_user', 'secret_sauce');

            await InventoryPage.addBackpackToCart();
            
            expect(await browser.getUrl()).toContain('inventory');
    });

    it('Should open cart and verify item exists', async () => {
        await CartPage.openCart();
        expect(await browser.getUrl()).toContain('cart');
        await expect(CartPage.removeBtn).toBeDisplayed();
    });

    it('Should remove item from cart', async () => {
        await CartPage.removeItem();
        await expect(CartPage.removeBtn).not.toBeDisplayed();
    });

    it('Should continue shopping from cart', async () => {
        await CartPage.continueShopping();
        expect(await browser.getUrl()).toContain('inventory') ;
    });

});