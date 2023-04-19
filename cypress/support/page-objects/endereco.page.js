class EnderecoPage{

    editarEnderecoFaturamento(nome, sobreNome, empresa, pais, rua, numero, cidade, estado, cep, telefone, email){

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobreNome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').type(estado+'{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()
    }

    editarEndercoEntrega(){

    }

}

export default new EnderecoPage()