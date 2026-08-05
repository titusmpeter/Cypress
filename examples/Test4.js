/// <reference types='Cypress' />

describe("Web elements", function () {
 
  it("Refactored TC", function () {
    
    cy.visit("https://rahulshettyacademy.com/automationpractise/#/");
    //validation using assertions i.e. ".should"
    //select checkbox and validate it is checked
    //validate checked box has the desired value i.e. 'option1'
    
    cy.get("#checkBoxOption1").check().should("be.checked").and('have.value','option1'); //multiple assertions (2) in the same line
    //cy.get("#checkBoxOption1").check().should("be.checked").should('have.value','option1');
   
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked"); //uncheck and validate the same

    //select multiple items using a commomn property i.e. input type
    //select 
    cy.get("input[type='checkbox']").check(['option2','option3']).should("be.checked");

    //Static DropDowns
    cy.get("select[id='dropdown-class-example']").select("option3").should("have.value","option3");
    cy.get("select").select("option2");
    cy.get("#dropdown-class-example").select("option1"); //different ways of achieving the same outcome

    //Dynamic DropDowns
    cy.get("#autocomplete").type("Tu");
    cy.get(".ui-menu-item div").each(function ($el, index, $list) {

      if($el.text() === "Tuvalu") {
        $el.click();
      }

    })

    cy.get("#autocomplete").should("have.value", "Tuvalu");
    cy.get("#autocomplete").should("contain.value", "Tuvalu");

    //Visible and invisible elements
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click().get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click().get("#displayed-text").should("be.visible");
    
    //Radio buttons
    cy.get("input[value='radio2']").check().should("be.checked");
   
    //pop-ups
    //cy auto-accepts alerts and pop-ups
    cy.get("#alertbtn").click();
    cy.get("input[id='confirmbtn']").click(); //different methods of acheiving the same goal
    
    //cy has the capability to listen for browser events e.g. window:alert
    cy.on("window:alert", function(str)  { //trigger an alert evt from cy
      expect(str).to.equal("Hello , share this practice page and share your knowledge");

    });

    cy.on("window:confirm", (_) =>  { //trigger a confirm evt from cy
      expect(_).to.equal("Hello , Are you sure you want to confirm?");

    });

    
  });
});
