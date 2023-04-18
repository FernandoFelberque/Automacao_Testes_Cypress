/// <reference types ="cypress"/>
context('Funcionalidade Login', () => 
{
    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('Deve exibir mensagem de erro ao inserir senha invalido', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhainvalida')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })

    it('Deve exibir mensagem de erro ao inserir usuario invalido', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('alunoInexistente')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: o usuário alunoInexistente não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    })

})