/// <reference types="cypress" />

describe('login to webpage', ()=>{

    it ('go to webpage', ()=> {
        cy.title().should('eq', 'Testing Application')
    })

    it ('go to login page', () => {
        cy.get('[href="/login"]').click()
        cy.title().should('eq', 'Login')
    })
})


describe('open note', ()=>{

    beforeEach(function () {
        cy.fixture('testData').then((data) => {
            this.data = data
        })
    })

    it ('open note from user profile', function () {
        cy.get('[href="/login"]').click()
            .get('#email').clear().type(this.data.email)
            .get('input[type ="password"]').clear().type(this.data.password)
            .get('[for="submit"] > input').click()
            .get('[href="/profile"]').click()
            .get('[class*="Search_card_"]').contains('Another').should('be.visible').click()
            .get('[class*="Home_title_"]')
            .should('exist')
    })

    it ('Defect_1 open note from the search page', function () {
        cy.get('[href="/search"]').click()
            .get('#searchText').clear().type('Another')
            .get('[class*="Search_card_"]').click()
            .get('[class*="Home_title_"]')
            .should('exist')
        
    })

})  