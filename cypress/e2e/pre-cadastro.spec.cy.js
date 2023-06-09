/// <reference types ="cypress"/>
var faker = require('faker');

describe('Funcionalidade Pre Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    it('Deve Completar o Pre cadastro com sucesso', () => {
        let emailFaker = faker.internet.email()
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker= faker.name.lastName()
        
        cy.get('#reg_email').type(emailFaker) //faker.internet.email()
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
    });

});