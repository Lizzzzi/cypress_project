/// <reference types="cypress" />

describe ('search by text combine with search by owner', () => {
    let n1 = 0

    it ('search via valid email', () => {
        cy.get('[href="/search"]').click()
            .get('[class*="Search_card_"]')
            .then((arr) => n1 = arr.length)
            .get('input[name = "searchOwner"]').type('tester@shair.co')
            .get('input#searchText').type('sample note')
            .get('[class*="Search_card_"]')
            .should('have.length', n1)
    })

})