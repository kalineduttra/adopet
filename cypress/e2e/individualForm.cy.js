describe('Given that you visit the individual form page', () => {
  beforeEach('visit page', () => {
    cy.visit('/')
  })

  context('When to fill in the expression of interest form to adopt a pet', () => {
    it('Then the system must return JSON object', () => {
      cy.individualForm()
      cy.location('pathname').should('equal', '/cadastro-form.php')
    })
  })
})
