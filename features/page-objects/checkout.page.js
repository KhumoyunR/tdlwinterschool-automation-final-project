import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CheckoutPage extends Page {
    get createAnAccountText() { return $('//h3[text()="Create an account"]'); }
}

export default new CheckoutPage();