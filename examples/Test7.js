/// <reference types='Cypress' />

describe("Test Suite 7" , ()=> {
    it("Child Windows", ()=> {

        //cypress does not automatically support child windows
        cy.visit("https://rahulshettyacademy.com/automationpractise/#/");
                      
        cy.get("#opentab").then(function (el) {

            //get the property value of the URL
            const url=el.prop("href");
            cy.visit(url) //visit new URL

            cy.origin(url, ()=> {
                cy.get("div .sub-menu-bar a[href*='about']").click();
            })

        })
        


    






    })
})