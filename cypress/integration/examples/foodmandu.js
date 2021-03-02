/// <reference types="Cypress" />
describe('TestSuite', function()
{
    it('Validate Foodmandu Workflow', function()
    {
        ///Login
        cy.visit("https://foodmandu.com/")
        cy.get("button.hidden-sm-down").should("be.visible").and("be.enabled").click()
        cy.get("[type=email]").should("be.visible").and("be.enabled").type("elizashrestha0933@gmail.com")
        cy.get("[type=password]").should("be.visible").and("be.enabled").type("foodmandu1234")
        cy.get("[type=submit]").should("be.visible").and("be.enabled").click() 
        
        cy.get(".header__right-menu>ul>li>.icon-profile").should("be.visible")
        cy.log("User LoggedIn")
        ///

        ///Find Restaurants
        cy.get(".btn-block[type=button]").should("be.visible").and("be.enabled").click()
        cy.contains("Restaurants and stores")
        ///

        cy.wait(5000)

        ///Search for T3 Thakali Restaurant
        cy.get("[name=q]").should("be.visible").and("be.enabled").type("T3 Thakali")
        cy.get(".text-white").should("be.visible").click()
        cy.contains("T3 Thakali")
        ///

        ///Search for Buff Steam Momo in T3 Thakali
        cy.get(".title20>a").click()
        cy.wait(2000)
        cy.get(".has-feedback>input").should("be.visible").and("be.enabled").type("Buff Steam MO:MO")
        cy.wait(2000)
        cy.contains("Buff Steam Mo:Mo")
        cy.get(".mr-2").click()
        ///
        
        ///Add to Bag
        cy.get(".btn--add-to-cart>div>.ng-binding").click()
        cy.contains("GRAND TOTAL")
        cy.log("Item Added to Bag")
        ///

        cy.wait(4000)

        ///LogOut
        cy.scrollTo('topRight')
        cy.get(".header__right-menu>ul>li>.icon-profile").click()
        cy.get("#logoutForm>a").click()
        cy.contains("Login")
        cy.log("User LoggedOut")
        
        ///

    })
})