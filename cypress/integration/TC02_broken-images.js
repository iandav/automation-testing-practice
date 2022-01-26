/// <reference types="cypress" />
import BrokenImages from './pages/brokenImages'

describe('Verify broken images', () => {

    const images = new BrokenImages();

    beforeEach( () => {
        cy.visit("https://the-internet.herokuapp.com/broken_images");
    })

    it("Image 1 is displayed", () => {
        images.image1()
        .invoke("attr","src")
        .should("eq","img/asdf.jpg");
    })

    it("Image 2 is displayed", () => {
        images.image2()
        .invoke("attr","src")
        .should("eq","img/hjkl.jpg");
    })

    it("Image 3 is displayed", () => {
        images.image3()
        .invoke("attr","src")
        .should("eq","img/avatar-blank.jpg");
    })


})
