/// <reference types="cypress" />
import Elements from "./page-objects/entryAd";

describe("Verify an entry ad", () => {

    const element = new Elements();

    it("Ad is displayed", () => {
        cy.visit("https://the-internet.herokuapp.com/entry_ad");

        element.ad()
        .should("exist")
        .and("be.visible");
    })
    
})