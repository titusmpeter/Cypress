/// <reference types='Cypress' />

//Child windows and tabs
//Cypress will work so long as you're on the same tab
//Cypress does not switch tabs by default

describe("Test Suite V", () => {
  it("Child Tabs", () => {
    cy.visit("https://rahulshettyacademy.com/automationpractise/#/");

    //remove target="_blank" attribute at runtime and invoke DOM - disables opening a link on a blank/new tab
    //using a jquery command to invoke DOM event
    cy.get("#opentab").invoke("removeAttr", "target").click();

    //cypress does not support cross-origin (change of origin domain midway)
    //change of origin domain
    cy.origin("https://www.qaclickacademy.com", () => {
      //configured in e2e.js for globally turning off of uncaught exception handling
      /* Cypress.on('uncaught:exception', (err, runnable) => {
              return false;
                }) */

      //any activity in the new domain has to  be within this function
      //anything outside this function if directed to the original domain
      cy.get("#navbarSupportedContent a[href='about.html']").click();
      cy.get(".section-title h2").should(
        "contain",
        "Welcome to QAClick Academy",
      );
    });
  });
});
