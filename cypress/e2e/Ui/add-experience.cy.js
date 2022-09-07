/// <reference types="cypress" />
const experienciaPage = require('../../support/Experiência/experiencia-pages')

describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email,user[1].senha)
        });
        cy.visit('adicionar-experiencia')
        
        
    });

    it.only('Deve adicionar experiência atual com sucesso', () => {
        experienciaPage.addExperienciaAtual('QA', 'Via','São Paulo','02/06/2022', 'FAIL')
        cy.get('[data-test="experience-delete"]').should('exist')   
    });
    it.only('Deve adicionar uma experiência com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via','São Paulo','02/06/2022', '09/09/2039', 'FAIL')
        cy.get('[data-test="experience-delete"]').should('exist')   
    });
    it.only('Deve Remover uma experiência com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via','São Paulo','02/06/2022', '09/09/2039', 'FAIL')
        cy.get('[data-test="experience-delete"]').first().click()
        cy.get('[data-test="experience-delete"]').eq(1).click()
        cy.get('[data-test="experience-delete"]').last().click()
        cy.wait(2000)

        cy.get('.container > :nth-child(2)').should('contain', 'Experiência Removida')
        cy.contains('Experiência Removida').should('be.visible')
    });


});
