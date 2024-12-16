describe('forms', () => {
  beforeEach('Given that I visit the page of the expression of interest form to adopt a pet', () => {
    cy.visit('/')
  })

  context('When I fill in the individual form', () => {
    it('Then the system must return JSON object', () => {
      cy.individualForm()
      cy.location('pathname').should('equal', '/cadastro-form.php')
    })
  })
})
