import { $$,$, ElementFinder, browser, ElementArrayFinder, element, by } from "protractor";
import * as chai from 'chai';
const assert = chai.expect;
export class imdbFindPage {

    /**
     * This function is used to validate that the result for the desired section
     * on the IMDB Find Page is correct
     * @param resSection - Desired section to count
     * @param resCount - Expected count of results
     */
    async validateCountImdbFindPageMovieSearchTitle(resSection : string, resCount : number){
        var x = "//h3[contains(text(),'"+resSection+"')]/following-sibling::table//tr";
        await assert(element.all(by.xpath(x.toString())).count()).to.eventually.be.equal(resCount);
    };
    
   /**
    * This function is used to click a Movie Title from the results on IMDB Find Page
    * @param selMovTitle (i.e Titanic (1970))
    * @param resSection (i.e Titles)
    */
    async clickImdbsFindPageSearchResultMovie(selMovTitle : string, resSection : string){
        var x = "//h3[contains(text(),'"+resSection+"')]/following-sibling::table//tr/td[contains(.,'"+selMovTitle+"')]/a";
        await element(by.xpath(x)).click();
    };
}