//Cypress - Spec
/// <reference types='Cypress' />

describe("Test Suite", () => {
  //describe a test suite
  it("Test Case I", () => {
    //define a test case
    cy.visit("https://rahulshettyacademy.com/seleniumpractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get(".product:visible").should("have.length", 4);

    //parent-child chaining
    cy.get(".products").find(".product").should("have.length", 4);

    //select 1st item on the list (0 in the array), find the region containing "ADD TO CART", and click it
    cy.get(".products").find(".product").eq(0).contains("ADD TO CART").click();

    cy.get(".products").find(".product").each(($el, index, $lists) => {
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
