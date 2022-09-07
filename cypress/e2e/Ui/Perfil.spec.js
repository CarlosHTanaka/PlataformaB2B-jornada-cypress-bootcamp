/// <reference types="cypress" />

const faker = require('faker-br')

beforeEach(() =>{ //faz o visit antes de cada cenário
    
    cy.visit('cadastrar')
    cy.cadastro('','email','teste!123', 'teste!123')


});


describe('US001 - Funcionalidade: Cadastro de Perfil', () => {

    it.only('Deve cadastro do perfil', () => {
   
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo','SuperUser')

        cy.get('.large').should('contain', 'Dashboard', 'SuperUser')

        cy.criarPerfil()

    })
})

describe('US002 - Funcionalidade: Verificar campos obrigatórios', () => {

    it.only('Verificar campos obrigatórios', () => {
       
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo','SuperUser')
    
        cy.get('.large').should('contain', 'Dashboard', 'SuperUser')
    
        cy.verificarObrigatoriedades()
    
    })
})

