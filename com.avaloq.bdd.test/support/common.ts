import { $, ElementFinder, browser, element, by } from "protractor";
import * as chai from 'chai';
const expect = chai.expect;
export class common {
    
/**
 * This function is used get the browser Title and
 * validate if equal to expected
 * @param browTitle
 */
async validateDisplayedImdbBrowserTitle(browTitle: string){
    var title = await browser.getTitle();
    await expect(title).to.be.equal(browTitle+" - IMDb");
};

}








