/// <reference types="cypress" />
import Elements from "./page-objects/dragAndDrop"

describe("Verify Drag and drop functionality", () => {

    const element = new Elements();

    it("Drag column A to column B", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");

        const dataTransfer = new DataTransfer();
        
        element.columnA()
        .trigger("dragstart", {
            dataTransfer
        });

        element.columnB()
        .trigger("drop", {
            dataTransfer
        })

        cy.get("#column-b > header")
        .invoke("text")
        .should("eq","A");

        })
    })

// Alternative: Using a cypress drag & drop pluggin.