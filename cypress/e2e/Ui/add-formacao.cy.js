/// <reference types="cypress" />

const formacaoPage = require('../../support/Formacao/formacao-pages')


describe('Funcionalidade: Adicionar Experiência', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email,user[1].senha)
        });
        cy.visit('adicionar-formacao')
    
        
    });
 
    
    it.only('Deve adicionar formacao com sucesso', () => {
        formacaoPage.addEducation("QA", "Mestre QA", "Remoto","10102021", "30092022", "Via é 1000")
        cy.get('[data-test="alert"]').should("have.text", "Formação Acadêmica Adicionada")
    });

    it('Deve adicionar formacao atual com sucesso', () => {
        formacaoPage.addEducationInProgress("QA", "Mestre", "Remoto","10102021", "Via é BlackFriday")
        cy.get('[data-test="alert"]').should("have.text", "Formação Acadêmica Adicionada")
    });

    it('Deve Remover formacao atual com sucesso', () => {
        formacaoPage.addEducationInProgress("QA", "Mestre", "Remoto","10102021", "Via é BlackFriday")
        cy.get('[data-test="education-delete"]').first().click()
        cy.get('[data-test="education-delete"]').eq(1).click()
        cy.get('[data-test="education-delete"]').last().click()
        cy.wait(2000)

        cy.get('.container > :nth-child(2)').should('contain', 'Formação Acadêmica Removida')
        cy.contains('Formação Acadêmica Removida').should('be.visible')
    });
});