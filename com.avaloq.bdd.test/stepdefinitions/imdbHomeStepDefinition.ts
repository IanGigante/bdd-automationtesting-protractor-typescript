import { imdbHomePage } from "../pages/imdbHomePage";
const {Given, When, Then } = require("cucumber");

const imdbHome : imdbHomePage = new imdbHomePage();

Given(/^I navigate to "(.*?)" url$/,{timeout: 3 * 5000}, async (url : string) => {
     await imdbHome.navigateImdbHomepage(url);
});

When(/^I enter "(.*?)" in the Seach field of IMDB homepage$/, async (text : string) => {
    await imdbHome.enterImdbHomePageMovieSearchField(text);
});

When(/^I click on search icon of IMDB homepage$/,  async () => {
    await imdbHome.clickEmdbHomePageMovieSearchIcon();
});
