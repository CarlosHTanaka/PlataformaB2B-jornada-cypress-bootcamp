

/// <reference types="Cypress" />

const faker = require('faker-br')

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => { 
cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(email)
cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(senha)
cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add("cadastro", (SuperUser,email,senha,confirmaSenha) => { 

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName(SuperUser))
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(email))

    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(confirmaSenha)

    cy.get('[data-test="register-submit"]').click()

    //resultado esperado

Cypress.Commands.add("criarPerfil", () => { 

        cy.get('[data-test="dashboard-createProfile"]').should('exist').click()

        cy.get('#mui-component-select-status').click()

        cy.get('[data-test="status-2"]').click()

        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())

        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())

        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.address.city(),"-",faker.address.state())

        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.name.jobDescriptor()).type(faker.name.jobArea()).type(faker.name.jobType())

        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type("https://cgithub.com/viavarejo-internal/cypress-automation")

        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type("qa")

        cy.get('[data-test="profile-submit"]').click()

        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')

    
    })

    Cypress.Commands.add("verificarObrigatoriedades", () => { 

        cy.get('[data-test="dashboard-createProfile"]').should('exist').click()

        cy.get('#mui-component-select-status').click()

        cy.get('[data-test="status-2"]').click()

        cy.contains('* = campos obrigatórios')
        //cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())

        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())

        cy.get('[data-test="profile-submit"]').click()

        cy.contains('Conhecimentos é obrigatório')

        
    
    })



})


