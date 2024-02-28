Feature: Product Search
  
  @search
  Scenario: Users searches for products using the search box
    Given I am on the home page
    When I click to the search box
    And I enter T-shirt into the search box
    And I click the search button
    Then I should see products related to T-shirt
