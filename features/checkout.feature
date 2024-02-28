Feature: Checkout

  @checkout
  Scenario: Unregistered user tries to proceed with checkout
    Given I am on the home page
    And I have no product in my cart
    When I select Women menu item
    And I click on a product
    And I select a Blue color
    And I click the Add to Card button
    And I click the Proceed to checkout button
    Then I should be asked to "CREATE AN ACCOUNT"
