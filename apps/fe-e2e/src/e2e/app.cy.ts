import { getGreeting, getTodoAddButton, getTodos } from '../support/app.po';

describe('fe', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome fe');
  });

  it('should display todo', () =>{
    getTodos().should(t=>{expect(t.length).equal(2)})
    getTodoAddButton().click()
    getTodos().should(t=>{expect(t.length).equal(3)})
  })
});
