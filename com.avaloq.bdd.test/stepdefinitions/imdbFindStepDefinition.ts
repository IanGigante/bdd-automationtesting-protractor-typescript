import { imdbFindPage } from "../pages/imdbFindPage";
const {Given, When, Then } = require("cucumber");

const imdbFind : imdbFindPage = new imdbFindPage();

Then(/^Total of (-?\d+) entries are displayed for the Movie search on the "(.*?)" section of IMDB Find Page$/, async (resCount : number , resSection : string) => {
    await imdbFind.validateCountImdbFindPageMovieSearchTitle(resSection, resCount);
});

When(/^I click "(.*?)" Movie on the "(.*?)" section of IMDB Find Page$/,{timeout: 3 * 15000},async (selMovTitle : string, resSection : string) => {
    await imdbFind.clickImdbsFindPageSearchResultMovie(selMovTitle, resSection);
});
