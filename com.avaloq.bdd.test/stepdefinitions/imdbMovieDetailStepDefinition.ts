import { imdbMovieDetail } from "../pages/imdbMovieDetailPage";
import { common } from "../support/common";
const {Given, When, Then } = require("cucumber");
const c: common = new common();
const imdbMovie: imdbMovieDetail = new imdbMovieDetail();

Then(/^I navigated to "(.*?)" Movie Detail Page$/, {timeout: 3 * 5000}, async (browTitle : string) => {
     await c.validateDisplayedImdbBrowserTitle(browTitle);
});

When(/^I click Rate This icon of IMDB Movie page$/,  async () => {
    await imdbMovie.clickImdbimdbMovieDetailRateThis();
});

When(/^I rate the movie "(.*?)" stars on Movie Detail Page$/, async (rate : string) => {
    await imdbMovie.clickImdbimdbMovieDetailRateThisRate(rate);
});

