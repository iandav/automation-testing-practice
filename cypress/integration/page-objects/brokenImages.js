/// <reference types="cypress" />

class BrokenImages {
    
    image1() {
        return cy.get('[src="asdf.jpg"]');
    }
    image2() {
        return cy.get('[src="hjkl.jpg"]');
    }
    image3() {
        return cy.get('[src="img/avatar-blank.jpg"]');
    }
}

export default BrokenImages;