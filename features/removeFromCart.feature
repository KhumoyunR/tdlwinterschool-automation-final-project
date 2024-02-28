Feature: Remove from the Cart

  @remove
  Scenario: Counter of the cart decreases by removing a product from the cart
    Given I am on the home page
    And I have no product in my cart
    When I select Women menu item
    And I click on a product
    And I select a Blue color
    And I click the Add to Card button
    And I click the Continue shopping button
    And I click remove button on cart
    Then Counter of the cart should be empty