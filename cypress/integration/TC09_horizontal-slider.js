/// <reference types="cypress" />
import Elements from "./page-objects/horizontalSlider"

describe("Check an horizontal slider", () => {

    const element = new Elements();

    it("Slider is at 0 by default", () => {
        cy.visit("https://the-internet.herokuapp.com/horizontal_slider");

        element.slider()
        .invoke("attr","value")
        .should("eq","0");
    })

    it("Change slider to its max value (5)", () => {
        element.slider()
        .invoke("val",5)
        .trigger("change");

        element.sliderValue()
        .contains(5);
    })
})