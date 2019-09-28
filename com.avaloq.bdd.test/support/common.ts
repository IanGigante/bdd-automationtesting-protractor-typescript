import { $, ElementFinder, browser, element, by } from "protractor";
import * as chai from 'chai';
const assert = chai.expect;
export class common {
    
    public imdbimdbMovieDetailRateThis: ElementFinder = $("//span[text()='Rate This']/parent::node()");
public imdbHomePageMovieSearchFieldIcon: ElementFinder = $("#navbar-submit-button");


/**
 * This function is used get the browser Title and
 * validate if equal to expected
 * @param browTitle
 */
async validateDisplayedImdbBrowserTitle(browTitle: string){
    await browser.getTitle();
    await assert(browser.getTitle()).to.eventually.be.equal(browTitle+" - IMDb");
};

}








