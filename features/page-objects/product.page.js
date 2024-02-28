import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {

    async clickColorOption(colorName) { 
        const colorOption = await $(`//a[@name="${colorName}"]`);
        await colorOption.click();
    }

    get addToCartButton() { return $('//span[text()="Add to cart"]'); }
    get proceedToCheckout1() { return $('//a[contains(@title,"Proceed to checkout")]'); }
    get proceedToCheckout2() { return $('//span[text()="Proceed to checkout"]'); }
    get continueShopping() { return $('//span[contains(@title, "Continue shopping")]'); }
    get counterNumber() { return $('.ajax_cart_quantity'); }
    get viewCart() { return $('//a[contains(@title,"View my shopping cart")]'); }
    get removeButton() { return $('.remove_link'); }
}

export default new ProductPage();