/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    })

    it('Deve fazer login com sucesso', () => {
        //cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('qatestes@123.com.br')
        //cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('1234567')
        //cy.get('[data-test="login-submit"]').click()
        cy.login(' qab2b@qa.com.br','teste@1233')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo qab2b')
    })

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
        //cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('11qatestes@123.com.br')
        ///cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('123ffff4567')
        //cy.get('[data-test="login-submit"]').click()
        cy.login('qa@qa12222.com.br','teste@12332222')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')

    })
});

/*Funcionalidade: Login
Eu gostaria de verificar api XPTO
Quero fazer o login
Para editar meu perfil

Cenário:  Login com sucesso

Arrange - Dado - Pré-requisito  - Dado que eu esteja na tela de login
Action - Quando - Aacção do usuário - Quando eu inserir usuário e senha
Assert- Então - Resultado Esperado- Então deve me direcionar para o Dashboard

Esquema do cenário
Quando eu inserir o usuario <usuario>
E <senha>
Então

Exemplos:
|usuario |senha|
|"qa@bootcamp.com"|"testes@123"|
|


Cenário: Recuperar Senha
Cenário: Validar msg de erro 

Cenário: Validar Senha*/