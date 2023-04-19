/// <reference types ="cypress"/>
import enderecoPage from '../support/page-objects/endereco.page';
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade de enderecos - Faturamento', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
       
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario ,dados.senha)  
        })


    });

    it('Deve fazer cadastro do faturamento com sucesso', () => {
       enderecoPage.editarEnderecoFaturamento('Fernando','Felberque','EBAC','Brasil','Anita Malfatte','29','Belo Horizonte','Minas Gerais','31844000','31988888888','fernandoteste@gmail.com')
       cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro do faturamento com sucesso - Usando Aquivos de Dados', () => {
        enderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome, dadosEndereco[1].sobrenome, dadosEndereco[1].empresa, dadosEndereco[1].pais, dadosEndereco[1].rua, dadosEndereco[1].numero,dadosEndereco[1].cidade, dadosEndereco[1].estado, dadosEndereco[1].cep, dadosEndereco[1].telefone, dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
     });
});