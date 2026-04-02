import { browser, $, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import CartPage from '../pageobjects/cart.page.js';
import InventoryPage from '../pageobjects/Inventory.page.js';




describe('Shopping Cart Tests on SauceDemo', () => {

    it('Should log in and add item to cart', async () => {
        await browser.url('https://www.saucedemo.com/');
            await LoginPage.login('standard_user', 'secret_sauce');
            await InventoryPage.addBackpackToCart();
            await expect(InventoryPage.cartIconOneItem).toExist();
            await expect(InventoryPage.cartBadge).toHaveText(
                expect.stringContaining('1'))
            // await expect(InventoryPage.cartIcon).toHaveText('1');
            // expect(await browser.getUrl()).toContain('inventory');
    });

    it('Should open cart and verify item exists', async () => {
        await CartPage.openCart();
        expect(await browser.getUrl()).toContain('cart');
        await expect(CartPage.cartItem).toHaveText(
                expect.stringContaining('Backpack'));
       
    });

    it('Should remove item from cart', async () => {
        await CartPage.removeBackpack();
        await expect(CartPage.removeBtnBackpack).not.toBeDisplayed();
    });

    it('Should continue shopping from cart', async () => {
        await CartPage.continueShopping();
        expect(await browser.getUrl()).toContain('inventory');
    });

});

describe('Cart Test/Actual behavior', () => {
    it('Should allow checkout with an empty cart', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await CartPage.openCart();
        await expect(CartPage.shoppingCartIcon);
        await expect(CartPage.checkout().toBeExisting);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html'); 
        
    });
});


describe('Shopping cart Tests', () => {
    it('Adding random number of items to shopping cart', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.cartBadge).toHaveText(
            await InventoryPage.addRandomItems()
        );
    });
});

describe('Shopping cart test', () => {
    it('Should add all items to cart and verify', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.addAllItemsToCart();
        await expect(InventoryPage.cartBadge).toHaveText('6');
        
    });
});

describe('Shopping cart tests', () => {
    it('Should add all items to cart verify and then remove 1 item and verify', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.addAllItemsToCart();
        await expect(InventoryPage.cartBadge).toHaveText('6');
        await InventoryPage.removeOneItem();
        await expect(InventoryPage.cartBadge).toHaveText('5');
    });
});

describe('Shopping cart Tests', () => {
    it('Should add all items to cart, remove one item, then remove all remaining', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.addAllItemsToCart();
        await expect(InventoryPage.cartBadge).toHaveText('6');
        await InventoryPage.removeOneItem();
        await expect(InventoryPage.cartBadge).toHaveText('5');
        await InventoryPage.removeAllItems();
        await expect(InventoryPage.cartBadge).not.toBeDisplayed();
    });
});

