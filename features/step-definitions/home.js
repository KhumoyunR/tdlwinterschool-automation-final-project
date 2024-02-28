import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import menuPage from '../page-objects/menu.page.js';
import productsPage from '../page-objects/products.page.js';


Given('I am on the home page', async function() {
    await homePage.open();
});

Given('I have no product in my cart', async function() {
    await expect(homePage.emptyMessage).toHaveText("(empty)");
});

When('I select {word} menu item', async function(title) {
    await menuPage.clickMenuItem(title);
});

When('I click to the search box', async function() {
    await homePage.clickSearchBox.click();
});

When('I enter {word} into the search box', async function(text) {
    await homePage.clickSearchBox.setValue(text);
});

When('I click the search button', async function() {
    await homePage.clickSearchButton.click();
});

Then('I should see products related to {word}', async function(text) {
    expect(await productsPage.validateSearch(text)).toBe(true);
});