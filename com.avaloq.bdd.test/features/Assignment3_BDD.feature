Feature: To search Movie Title and validate the Movie Details

  @Assignment3_BDD
  Scenario: Search Movie Title Titanic on IMDB
    Given I navigate to "https://www.imdb.com" url
    When I enter "Titanic" in the Seach field of IMDB homepage
    And I click on search icon of IMDB homepage
    Then Total of 2 entries are displayed for the Movie search on the "Titles" section of IMDB Find Page
    When I click "Titanic (1997)" Movie on the "Titles" section of IMDB Find Page
    Then I navigated to "Titanic (1997)" Movie Detail Page
    When I click Rate This icon of IMDB Movie page
    And I rate the movie "10" stars on Movie Detail Page
    Then I navigated to "Sign in with IMDb" page of IMDB
  
