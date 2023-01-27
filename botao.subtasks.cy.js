/// <reference types="cypress" />

describe('tasks', ()=> {

  it('O usuário deve ver um botão rotulado como - Manage Subtasks', ()=> {

      cy.visit('https://qa-test.avenuecode.io')
      cy.get('.btn-primary').click()
      cy.get('input[id="user_email"]').type('cinthiafog@yahoo.com')
      cy.get('input[id="user_password"]').type('fogacacinthia123')
      cy.get('.btn').click()
      cy.get('#my_task').click()
      cy.get(':nth-child(1) > :nth-child(4) > .btn').should('contain', 'Manage Subtasks')
      
  })
  
})