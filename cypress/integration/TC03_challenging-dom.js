/// <reference types="cypress" />
import Elements from "./page-objects/challengingDOM.js";

describe("Verify table items", () => {

    const elements = new Elements();

    beforeEach( () => {
        cy.visit("https://the-internet.herokuapp.com/challenging_dom");
    })

    it("Table headers have correct values", () => {
        elements.lorem()
        .should("have.text","Lorem");

        elements.ipsum()
        .should("have.text","Ipsum");

        elements.dolor()
        .should("have.text","Dolor");

        elements.sit()
        .should("have.text","Sit");

        elements.amet()
        .should("have.text","Amet");

        elements.diceret()
        .should("have.text","Diceret");

        elements.action()
        .should("have.text","Action");
    });

    it("edit links are ok", () => {
        elements.edit1()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit2()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit3()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit4()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit5()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit6()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit7()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit8()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit9()
        .invoke("attr","href")
        .should("eq","#edit");

        elements.edit10()
        .invoke("attr","href")
        .should("eq","#edit");
    });

    it("canvas element is present", () => {
        elements.canvas()
        .should("be.visible");
    });
    
})