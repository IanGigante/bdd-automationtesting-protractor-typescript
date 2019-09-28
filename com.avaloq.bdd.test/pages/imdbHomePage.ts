import { $, ElementFinder, browser } from "protractor";

export class imdbHomePage {
    
public imdbHomePageMovieSearchField: ElementFinder = $("#navbar-query");
public imdbHomePageMovieSearchFieldIcon: ElementFinder = $("#navbar-submit-button");

/**
 * This function is used to Enter a text to the IMDB Search Field
 * @param text
 */
async enterImdbHomePageMovieSearchField(text : string){
    await this.imdbHomePageMovieSearchField.clear();
    await this.imdbHomePageMovieSearchField.sendKeys(text); 
};

/**
 * This function is used to click the Search Icon
 */
async clickEmdbHomePageMovieSearchIcon() {
    await this.imdbHomePageMovieSearchFieldIcon.click();
};

/**
 * This function is used to navigate to a specific url
 * @param url
 */
async navigateImdbHomepage(url: string){
    await browser.get(url);
};
}
