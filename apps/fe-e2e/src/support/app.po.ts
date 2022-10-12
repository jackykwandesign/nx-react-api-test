export const getGreeting = () => cy.get('h1');
export const getTodos = () =>cy.get('li.todo')
export const getTodoAddButton = () =>cy.get('button#add-todo')