Cypress.Commands.add('individualForm', () => { 
    cy.get('#name').type(Cypress.env('VALID_NAME'))
    cy.get('#data').type(Cypress.env('VALID_DATE'))
    cy.get('.formulario__email > input').type(Cypress.env('VALID_EMAIL'))
    cy.get('#cpf').type(Cypress.env('VALID_CPF'))
    cy.get('#telefone').type(Cypress.env('VALID_PHONE_NUMBER'))
    cy.get('#cep').type(Cypress.env('VALID_CEP'))
    cy.get('.formulario__endereco_cidade').type(Cypress.env('VALID_CITY'))
    cy.get('.formulario__endereco_logradouro').type(Cypress.env('VALID_STREET'))
    cy.get('.formulario__endereco_bairro').type(Cypress.env('VALID_NEIGHBORHOOD'))
    cy.get('.formulario__endereco_estado').type(Cypress.env('VALID_STATE'))
    cy.get('.formulario__endereco_numero').type(Cypress.env('VALID_ADDRESS_NUMBER'))
    cy.get('.botao-formulario').click()
})

//           build: npm run build
