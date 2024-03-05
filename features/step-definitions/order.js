import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import homePage from '../page-objects/home.page.js';

When('I click on a product', async function() {
    await productsPage.firstProductPhoto.click();
});

When('I select a {word} color', async function(color) {
    // await productPage.clickColorOption(color);
    await browser.debug();
});

When('I click the Add to Card button', async function() {
    // await productPage.addToCartButton.click();
    await browser.debug();
});

When('I click the Proceed to checkout button', async function() {
    await productPage.proceedToCheckout1.waitForClickable();
    await productPage.proceedToCheckout1.click();
    await productPage.proceedToCheckout2.click();
});

When('I click the Continue shopping button', async function() {
    await productPage.continueShopping.waitForClickable();
    await productPage.continueShopping.click();
});

When('I click remove button on cart', async function() {
    await productPage.viewCart.moveTo();
    await productPage.removeButton.waitForClickable();
    await productPage.removeButton.click();
});

// REVIEW: Calling this function 'Counter of the cart should be 1' would be more precise for what you are doing
Then('Counter of the cart should increase by 1', async function() {
    await expect(productPage.counterNumber).toHaveText("1");
});

Then('Counter of the cart should be empty', async function() {
    await expect(homePage.emptyMessage).toHaveText("(empty)");
});