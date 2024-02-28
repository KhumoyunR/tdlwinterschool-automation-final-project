import { Given, When, Then } from '@wdio/cucumber-framework';
import checkoutPage from '../page-objects/checkout.page.js';

Then('I should be asked to {string}', async function(text) {
    await expect(checkoutPage.createAnAccountText).toHaveText(text);
});