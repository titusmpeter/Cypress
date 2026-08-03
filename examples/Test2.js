/// <reference types='Cypress' />

describe("Test Suite II", () => {
  //describe a test suite
  it("Refactored TC", () => {
    //define a test case
    cy.visit("https://rahulshettyacademy.com/seleniumpractise/#/");
    cy.get(".search-keyword").type("ca");
    //cy.wait(2000);
    
    //Assert if logo text is correctly displayed
    cy.get(".brand").should("have.text","GREENKART");

    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);

    //parent-child chaining
    cy.get(".products").find(".product").should("have.length", 4);

    //create an alias for repeated command and reuse
    cy.get(".products").as("productLocator");
    
    //select 1st item on the list (0 in the array), find the region containing "ADD TO CART", and click it
    cy.get("@productLocator").find(".product").eq(0).contains("ADD TO CART").click();

    cy.get("@productLocator").find(".product").each(($el, index, $lists) => {
      //$el - element, index - index of element, $lists - total list
      //each - loops over each element in a list
      const textVeg = $el.find("h4.product-name").text(); //get the product name and save as a variable

      if(textVeg.includes("Cashews")) { //if the product name includes the text

        //$el.find(".button").click(); //click button
        //cy.wrap($el).find(".button").click(); //click method deprecated for find method. cy.wrap - workaround
        cy.wrap($el).contains("ADD TO CART").click(); //click button containing text
        
      }
    });
    //fixture
  });
});
