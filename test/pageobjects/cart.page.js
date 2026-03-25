import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
   
    get shoppingCartIcon() {
        return $('.shopping_cart_link');
    }

    














}

export default new CartPage();