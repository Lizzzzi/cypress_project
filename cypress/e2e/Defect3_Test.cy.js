/// <reference types="cypress" />

describe ('search by text combine with search by owner', () => {
    let n1 = 0
    let n2 = 0

    it ('search via valid email', () => {
        cy.get('[href="/search"]').click()
            .get('input[name = "searchOwner"]').type('tester@shair.co')
            .get('input#searchText').type('sample note')
            .get('[class*="Search_card_"]')
            .should('have.length', 0)
    })

    it ('search via text', () => {
        cy.get('[href="/search"]').click()
            .get('[class*="Search_card_"]').as('cards')
            .then((arr) => n1 = arr.length)
            .get('input#searchText').type('Another')
            .get('[class*="Search_card_"]')
            .then((arr) => arr.length)
            .should('be.lessThan', n1)
    })
})