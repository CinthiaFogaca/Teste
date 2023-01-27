/// <reference types="cypress" />

describe('tasks', ()=> {

    it('A descrição da tarefa e a data de vencimento são campos obrigatórios', ()=> {
  
        cy.visit('https://qa-test.avenuecode.io')
        cy.get('.btn-primary').click()
        cy.get('input[id="user_email"]').type('cinthiafog@yahoo.com')
        cy.get('input[id="user_password"]').type('fogacacinthia123')
        cy.get('.btn').click()
        cy.get('#my_task').click()
        cy.get(':nth-child(1) > :nth-child(4) > .btn').click() // Clicar neste botão abre uma caixa de diálogo modal
        cy.get('.modal-title').should('contain', 'Editing Task') // Este pop-up deve ter um campo somente leitura com o ID da tarefa e a descrição da tarefa
        cy.get('#new_sub_task').type(' ') // Campo vazio e obrigatório.
        cy.get('input[id="dueDate"]').click()
        cy.get(':nth-child(2) > .input-group').type(' ') // Data não editada e ignorada pelo usuário.
        cy.get('#add-subtask').click()
        cy.get('.modal-footer > .btn').click()
         
        // Subtask esta sendo salva vazia.
    })
    
  
  })