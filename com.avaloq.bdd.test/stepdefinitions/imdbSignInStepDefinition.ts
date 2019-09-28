import { common } from "../support/common";
const {Given, When, Then } = require("cucumber");

const c: common = new common();

Then(/^I navigated to "(.*?)" page of IMDB/, {timeout: 3 * 5000}, async (browTitle : string) => {
     await c.validateDisplayedImdbBrowserTitle(browTitle);
});
