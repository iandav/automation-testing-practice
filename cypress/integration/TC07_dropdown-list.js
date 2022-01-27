/// <reference types="cypress" />
import Elements from "./page-objects/dropdownList";

describe("Verify dropdown", () => {

    const elements = new Elements();

    it("Select option 1", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown");

        elements.list()
        .select("1");

        cy.get("option[value='1']")
        .invoke("attr","selected")
        .should("eq","selected");

        cy.get("option[value='2']")
        .should("not.have.attr","selected");

    })

    it("Select option 2", () => {
        elements.list()
        .select("2");

        cy.get("option[value='2']")
        .invoke("attr","selected")
        .should("eq","selected");

        cy.get("option[value='1']")
        .should("not.have.attr","selected");

    })
})