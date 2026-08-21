/// <reference types='Cypress' />
/// <reference types='Cypress-iframe' />
//enable auto suggestions for cypress and iframe

import "cypress-iframe";
//import iframe package - has to be installed prior

describe("TS 8", () => {
  //HTML Document embedded within another document
  it("Embedded Frames", () => {
    //locate frame
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    //switch to iframe mode
    //click first element in the array i.e. (0)
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    //assertion - validation
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
