/// <reference types='Cypress' />
//Cypress has the ability to manipulate DOM

describe("Test Suite VI", () => {
  it("Web Tables", () => {
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
  });
});
