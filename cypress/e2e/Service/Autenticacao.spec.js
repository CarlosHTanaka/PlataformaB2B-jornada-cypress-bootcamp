/// <reference types="cypress" />

import auth from '../../fixtures/auth.json'

it.only('[POST] - Teste de autenticacao', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.empty
            expect(response.body).to.have.property("jwt")
            cy.getCookies('conexaoqa.herokuapp.com').should('exist')
            console.log(response.body)

        
    })

    it.only('[POST] - Teste de autenticacao usuario inválido', () => {
        cy.request({
            method: 'POST',
            url: '/api/auth',
            failOnStatusCode: false,
            body: {
                "email" : "teste2@teste.com.br",
                "senha": "12345678"

            }
            }).then((response) => {
                expect(response.status).to.eq(401)
                
            })
            
        })
});