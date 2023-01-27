/// <reference types="cypress" />

describe('tasks', ()=> {

    it('O usuário deve ver um botão rotulado como - Manage Subtasks', ()=> {
  
        cy.visit('https://qa-test.avenuecode.io')
        cy.get('.btn-primary').click()
        cy.get('input[id="user_email"]').type('cinthiafog@yahoo.com')
        cy.get('input[id="user_password"]').type('fogacacinthia123')
        cy.get('.btn').click()
        cy.get('#my_task').click()
        cy.get(':nth-child(1) > :nth-child(4) > .btn').click() // Clicar neste botão abre uma caixa de diálogo modal
        cy.get('.modal-title').should('contain', 'Editing Task') // Este pop-up deve ter um campo somente leitura com o ID da tarefa e a descrição da tarefa
        cy.get('#new_sub_task').type('Nam quis nulla. Inteiro malesuada. In in enim a arcu imperdiet maleuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id ushsudh sxuas dxhushd dbsxysb cdsdhcyushd')
        // A plataforma está aceitando 254 caracteres.
        cy.get('input[id="dueDate"]').click()
        cy.get(':nth-child(2) > .input-group').type('02/05/2023') // Erro ao adicionar a data na plataforma. Na verdade não consegui =(
        cy.get('#add-subtask').click()
        cy.get('.modal-footer > .btn').click()
        
    })
    
  
  })