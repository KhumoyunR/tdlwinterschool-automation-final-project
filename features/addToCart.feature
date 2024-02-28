Feature: Add to a Cart

  @add
  Scenario: Counter of the cart increases by adding a product to a cart
    Given I am on the home page
    And I have no product in my cart
    When I select Women menu item
    And I click on a product
    And I select a Blue color
    And I click the Add to Card button
    And I click the Continue shopping button
    Then Counter of the cart should increase by 1