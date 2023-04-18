/// <reference types ="cypress"/>

describe('Funcionalidade Pagina de produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')// a lista
        //.first()
        //.last()
        //.contains('') // nome do produto se clicavel
        .eq(3) // numero da posição na lista
        .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5
        cy.get('[class="product-block grid"]').eq(0).click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.plus').click() //testando o botao +
        cy.get('.minus').click() //testando o botao -
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')


    });

});