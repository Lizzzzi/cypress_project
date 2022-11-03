let bigNoteText = "Lorem ipsum dolor sit amet. Non vitae consequatur \
non accusamus provident eos incidunt dolore rem itaque repudiandae \
ex natus fugiat qui dolore odio! Ut maiores autem est perspiciatis \
voluptatibus qui rerum nobis aut tempora alias sit ipsa velit et libero \
quae ad dignissimos cumque. Ea perferendis autem id rerum consequatur \
qui deserunt maiores qui maxime commodi cum iure velit et excepturi \
necessitatibus sed dolores amet. Ea ipsa expedita et commodi enim quo \
adipisci dolores qui neque accusamus aut sint placeat."  

/// <reference types="cypress" />

describe ('enter new note', () => {

    beforeEach(function () {
        cy.fixture('testData').then((data) => {
            this.data = data
        })
    })

    it ('enter big text as a new note', function () {
        cy.get('[href="/login"]').click()
        .get('#email').clear().type(this.data.email)
        .get('input[type ="password"]').clear().type(this.data.password)
        .get('[for="submit"] > input').click()
        .get('[href="/profile"]').click()
        .get('#searchText').clear().type(bigNoteText)
        .get('[type="submit"]').click()
        .get('[href="/profile"]').click()
        .get('[class*="Search_card_"]').contains('Ea perferendis autem').should('exist')

    })

    xit ('enter small text as a new note', function () {
        cy.get('[href="/login"]').click()
        .get('#email').clear().type(this.data.email)
        .get('input[type ="password"]').clear().type(this.data.password)
        .get('[for="submit"] > input').click()
        .get('[href="/profile"]').click()
        .get('#searchText').clear().type('99999')
        .get('[type="submit"]').click()
        .get('[href="/profile"]').click()
        .get('[class*="Search_card_"]').contains('99999').should('exist')
    })
})