import App from '../../src/App'

describe('App.cy.js', () => {
  it('mount', () => {
    cy.mount(<App />)
  })

  it('renders learn react link', () => {
    mount(<App />)
    cy.contains(/learn react/i)
  })
})