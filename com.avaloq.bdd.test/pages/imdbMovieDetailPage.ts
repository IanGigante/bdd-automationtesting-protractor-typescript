import { $, ElementFinder, browser, element, by } from "protractor";

import * as chai from 'chai';
const assert = chai.expect;
export class imdbMovieDetail {
    
public imdbHomePageMovieSearchFieldIcon: ElementFinder = $("#navbar-submit-button");


private imdbimdbMovieDetailRateThis: string

constructor() {
    this.imdbimdbMovieDetailRateThis = "//span[text()='Rate This']/parent::node()";    
}

/**
 * This function is used click the Rate This icon on the Movie Title Page
 */
async clickImdbimdbMovieDetailRateThis(){
    await element(by.xpath(this.imdbimdbMovieDetailRateThis)).click()
};

/**
 * This function is used to select movie rating
 */
async clickImdbimdbMovieDetailRateThisRate(rate : string){
    var x = "//a[@title='Click to rate: "+rate+"']";
    await element(by.xpath(x)).click()
};
}








