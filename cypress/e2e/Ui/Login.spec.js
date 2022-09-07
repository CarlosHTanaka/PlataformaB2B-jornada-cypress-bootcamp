/// <reference types="cypress" />
import usuarios from  "../../fixtures/usuarios.json"
describe('US0001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    })

    it.only('Deve fazer login com sucesso', () => {
        cy.login(' qab2b@qa.com.br','teste@1233')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo qab2b')
    })

    it.only('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
        cy.login('qa@qa12222.com.br','teste@12332222')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')

    })

    it.only('Deve fazer login com sucesso - Usando importacao', () =>{
        cy.login(usuarios[0].email, usuarios[0].senha)
        cy.title().should('eq','ConexaoQA')
    })

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email,user[1].senha)
        })
        cy.title().should('eq','ConexaoQA')
    })
});
