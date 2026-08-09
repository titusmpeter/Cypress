/// <reference types='Cypress' />
//Cypress has the ability to manipulate DOM

describe("Test Suite VI", () => {
  it("Web Tables and mouse hover events", () => {
    cy.visit("https://rahulshettyacademy.com/automationpractise/#/");

    //finding the nth child - find the 2nd item in a row, iterate through row's 2nd item
    cy.get("#product tr td:nth-child(2)").each(($el, index, $list) => {
      const rowText = $el.text();

      if (rowText.includes("Python Language")) {
        //move to the sibling element
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            //get text from sibling element
            const priceText = price.text();
            expect(priceText).to.equal("25"); //validate
          });
      }
    });

    //invoking jquery methods using cypress to trigger DOM events
    //there is no direct mouse hover support in cypress, thus the use of jquery methods
    //show method shld be applied on immediate parent of hidden element

    //force click an inviscible element
    cy.contains("Top").click({ force: true }); //pass argument inside click method to force click hidden elements

    cy.get("div .mouse-hover-content").invoke("show"); //alternatively, invoke show method to reveal hidden element
    cy.contains("Top").click(); //then click
    cy.url().should("include", "top"); //validate URL contiains top
  });
});
