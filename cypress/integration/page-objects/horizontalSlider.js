
class Elements {
    slider() {
        return cy.get("input[type='range']");
    }

    sliderValue() {
        return cy.get("#range");
    }
}

export default Elements;