import { Given, When, Then } from '@wdio/cucumber-framework';
import checkoutPage from '../page-objects/checkout.page.js';

Then('I should be asked to {string}', async function(text) {
    // REVIEW: The "checkoutPage.createAnAccountText" is already a text-based selector, so using "toHaveText" on it is a bit redundant (not really a mistake, just a comment)
    await expect(checkoutPage.createAnAccountText).toHaveText(text);
});