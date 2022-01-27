/// <reference types="cypress" />
import Elements from "./page-objects/contextMenu"

describe("Verify Context menu", () => {

    const element = new Elements();

    it("Show an alert when right click", () => {
        cy.visit("https://the-internet.herokuapp.com/context_menu");
        element.box()
        .rightclick();

        cy.on("window:alert", (alert) => {
            expect(alert).to.contain("You selected a context menu");
        })
    })
})