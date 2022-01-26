/// <reference types="cypress" />
import AddRemoveElements from "./pages/addRemoveElements"

describe("Add and remove elements", () => {

    const addRemoveElements = new AddRemoveElements();

    it("Add an element", () => {
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
        addRemoveElements.addButton()
        .click();
    })

    it("Added element is present", () => {
        addRemoveElements.deleteButton()
        .contains('Delete')
        .and('be.visible');
    })

    it("Remove added element", () => {
        addRemoveElements.deleteButton()
        .click()
        .should('not.exist');
    })


})