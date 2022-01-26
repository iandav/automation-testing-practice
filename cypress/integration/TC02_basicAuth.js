/// <reference types="cypress" />

describe('Basic Auth inside an alert window', () => {

    it('Login', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth");
        cy.get(window);
    })
})
