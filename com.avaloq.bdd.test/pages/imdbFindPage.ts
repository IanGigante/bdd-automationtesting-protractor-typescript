import { $$,$, ElementFinder, browser, ElementArrayFinder, element, by } from "protractor";
import * as chai from 'chai';
const expect = chai.expect;
export class imdbFindPage {

    /**
     * This function is used to validate that the result for the desired section
     * on the IMDB Find Page is correct
     * @param resSection - Desired section to count
     * @param resCount - Expected count of results
     */
    async validateCountImdbFindPageMovieSearchTitle(resSection : string, resCount : number){
        var loc = "//h3[contains(text(),'"+resSection+"')]/following-sibling::table//tr";
        var actCount = await element.all(by.xpath(loc)).count();
        await expect(actCount).to.be.equal(resCount);
 };
    
   /**
    * This function is used to click a Movie Title from the results on IMDB Find Page
    * @param selMovTitle (i.e Titanic (1970))
    * @param resSection (i.e Titles)
    */
    async clickImdbsFindPageSearchResultMovie(selMovTitle : string, resSection : string){
        var loc = "//h3[contains(text(),'"+resSection+"')]/following-sibling::table//tr/td[contains(.,'"+selMovTitle+"')]/a";
        await element(by.xpath(loc)).click();
    };
}