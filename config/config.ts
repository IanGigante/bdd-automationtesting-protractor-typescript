import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../com.avaloq.bdd.test/support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

//    baseUrl: "www.imdb.com",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../com.avaloq.bdd.test/features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/com.avaloq.bdd.test/stepdefinitions/*.js", "../../typeScript/com.avaloq.bdd.test/support/*.js"],
        strict: true,
//        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
        tags: "@Assignment3_BDD",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
