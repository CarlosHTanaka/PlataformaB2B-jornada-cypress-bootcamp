/// <reference types="cypress" />

const faker = require('faker-br')

describe('US002 - Funcionalidade: Cadastro', () => {

    /* antes de tudo 
    before
    
    antes de cada cenário
    beforeEach

    depois de tudo
    after


    depois de cada cenário
    afterEACH
    */
        
    beforeEach(() =>{ //faz o visit antes de cada cenário
        cy.visit('cadastrar')
    });

    it.only('Deve fazer cadastro com sucesso', () => {

        cy.cadastro('Nome','email','teste!123', 'teste!123')
  
    })
})
