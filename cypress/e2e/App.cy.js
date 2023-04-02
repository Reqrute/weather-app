
describe('Search Town', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
  it('should have a form', () => {
    cy.visit('/')
    cy.get('input')
    cy.contains('Search')
  })
  it('should find a town', () => {
    cy.visit('/')
    cy.get('input').type('Несвиж')
    cy.contains('Search')
  })

  // it('should have the right initial state', function () {
  //   cy.window()
  //     .its('store')
  //     .invoke('getState')
  //     .should('deep.equal', { lan: 26.6766138, lat: 53.2226038 })
  // })
})

describe('Calendar', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
  it('should have a form', () => {
    cy.visit('/')
    cy.contains('Sign In')
    cy.contains('Sign Out')
  })
  it('should find a town', () => {
    cy.visit('/')
    cy.get('input').type('Несвиж')
    cy.contains('Sign In').click()
  })
})

describe('ForeCast', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
  it('should have a form', () => {
    cy.visit('/')
    cy.contains('Today')
    cy.contains('Daily')
    cy.contains('Hourly')
  })
  it('Hourly', () => {
    cy.visit('/')
    cy.contains('Hourly').click()
    cy.contains('Today').should('not.exist')
  })
  it('Daily', () => {
    cy.visit('/')
    cy.contains('Daily').click()
    cy.contains('Today').should('exist')
  })
})
