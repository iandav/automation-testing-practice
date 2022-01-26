/// <reference types="cypress" />

class AddRemoveElements {

    addButton() {
        return cy.get('[onclick="addElement()"]');
    }
    deleteButton() {
        return cy.get('.added-manually');
    }
}

export default AddRemoveElements