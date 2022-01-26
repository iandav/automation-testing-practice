/// <reference types="cypress" />

class Elements {

    lorem() {
        return cy.get("thead > tr > :nth-child(1)");
    }
    ipsum() {
        return cy.get('thead > tr > :nth-child(2)');
    }
    dolor() {
        return cy.get('thead > tr > :nth-child(3)');
    }
    sit() {
        return cy.get('thead > tr > :nth-child(4)');
    }
    amet() {
        return cy.get('thead > tr > :nth-child(5)');
    }
    diceret() {
        return cy.get('thead > tr > :nth-child(6)');
    }
    action() {
        return cy.get('thead > tr > :nth-child(7)');
    }
    edit1() {
        return cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]')
    }
    edit2() {
        return cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]')
    }
    edit3() {
        return cy.get(':nth-child(3) > :nth-child(7) > [href="#edit"]')
    }
    edit4() {
        return cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]')
    }
    edit5() {
        return cy.get(':nth-child(5) > :nth-child(7) > [href="#edit"]')
    }
    edit6() {
        return cy.get(':nth-child(6) > :nth-child(7) > [href="#edit"]')
    }
    edit7() {
        return cy.get(':nth-child(7) > :nth-child(7) > [href="#edit"]')
    }
    edit8() {
        return cy.get(':nth-child(8) > :nth-child(7) > [href="#edit"]')
    }
    edit9() {
        return cy.get(':nth-child(9) > :nth-child(7) > [href="#edit"]')
    }
    edit10() {
        return cy.get(':nth-child(10) > :nth-child(7) > [href="#edit"]')
    }
    canvas() {
        return cy.get("#canvas");
    }
}

export default Elements;