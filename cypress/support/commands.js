const {
    VALID_NAME, VALID_DATE,VALID_EMAIL,VALID_CPF, VALID_CNPJ,
    VALID_PHONE_NUMBER, VALID_CEP, VALID_CITY, VALID_STREET,
    VALID_NEIGHBORHOOD, VALID_STATE, VALID_ADDRESS_NUMBER
} = Cypress.env()

Cypress.Commands.add('individualForm', () => { 
    cy.get('#name').type(VALID_NAME)
    cy.get('#data').type(VALID_DATE)
    cy.get('.formulario__email > input').type(VALID_EMAIL)
    cy.get('#cpf').type(VALID_CPF)
    cy.get('#telefone').type(VALID_PHONE_NUMBER)
    cy.get('#cep').type(VALID_CEP)
    cy.get('.formulario__endereco_cidade').type(VALID_CITY)
    cy.get('.formulario__endereco_logradouro').type(VALID_STREET)
    cy.get('.formulario__endereco_bairro').type(VALID_NEIGHBORHOOD)
    cy.get('.formulario__endereco_estado').type(VALID_STATE)
    cy.get('.formulario__endereco_numero').type(VALID_ADDRESS_NUMBER)
    cy.get('.botao-formulario').click()
})

Cypress.Commands.add('legalEntityForm', () => {
    cy.get('#pessoa-juridica').click()
    cy.get('#name').type(VALID_NAME)
    cy.get('#data').type(VALID_DATE)
    cy.get('.formulario__email > input').type(VALID_EMAIL)
    cy.get('#cnpj').type(VALID_CNPJ)
    cy.get('#telefone').type(VALID_PHONE_NUMBER)
    cy.get('#cep').type(VALID_CEP)
    cy.get('.formulario__endereco_cidade').type(VALID_CITY)
    cy.get('.formulario__endereco_logradouro').type(VALID_STREET)
    cy.get('.formulario__endereco_bairro').type(VALID_NEIGHBORHOOD)
    cy.get('.formulario__endereco_estado').type(VALID_STATE)
    cy.get('.formulario__endereco_numero').type(VALID_ADDRESS_NUMBER)
    cy.get('.botao-formulario').click()
})
