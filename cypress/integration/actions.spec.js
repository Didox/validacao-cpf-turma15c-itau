/// <reference types="cypress" />

context('Validação de CPF', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Deve validar um CPF válido', () => {
    cy.get('input[name=nome]').type('Danilo')
    // cy.wait(1000)
    cy.get('input[name=cpf]').type('261.627.370-55')
    // cy.wait(1000)
    cy.get('button').click()
    // cy.wait(1000)
    cy.get('.alert-success').should("to.have.length", 1)
    // cy.wait(1000)
  })

  it('Deve validar um CPF inválido', () => {
    cy.get('input[name=nome]').type('Danilo')
    // cy.wait(1000)
    cy.get('input[name=cpf]').type('261.627.370-11')
    // cy.wait(1000)
    cy.get('button').click()
    // cy.wait(1000)
    cy.get('.alert-danger').should("to.have.length", 1)
    // cy.wait(1000)
  })
})
