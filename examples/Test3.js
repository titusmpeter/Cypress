/// <reference types='Cypress' />

describe("Test Suite III", function () {
 
  it("Refactored TC", function () {
    
    cy.visit("https://rahulshettyacademy.com/seleniumpractise/#/");
    cy.get(".search-keyword").type("ca");
       
    cy.get(".products").as("productLocator"); //create an alias for repeated command and reuse
    
    cy.get("@productLocator").find(".product").each(function ($el, index, $lists) {
      
      const textVeg = $el.find("h4.product-name").text(); //get the product name and save as a variable

      if(textVeg.includes("Cashews")) { //if the product name includes the text

        cy.wrap($el).contains("ADD TO CART").click(); //click button containing text
        
      }
    });
    
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    //cy.get(".promoBtn").click();
    cy.contains("Place Order").click();
    
    //fixture
  });
});
