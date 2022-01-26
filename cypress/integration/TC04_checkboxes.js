/// <reference types="cypress" />
import Elements from "./page-objects/checkboxes";

describe("Verify Checkboxes", () => {

    const element = new Elements();


    it("Checkbox 1 is present and is unchecked", () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
        element.checkbox1()
        .should("not.be.checked");
    })

    it("Check Checkbox 1", () => {
        element.checkbox1()
        .check();
    })

    it("Checkbox 2 is present and is checked", () => {
        element.checkbox2()
        .should("be.checked");
    })

    it("Uncheck Checkbox 2", () => {
        element.checkbox2()
        .uncheck();
    })



})