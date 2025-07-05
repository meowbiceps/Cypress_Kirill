import '/Users/admin/Documents/Cypress_Kirill/cypress/support/commands.js';

describe('Header Buttons Visibility', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: "guest",
          password: "welcome2qauto"
        }
      });
    });
    it('Verify field Name', () => {
        cy.get('.btn-primary').should('be.visible').click();
        cy.get('#signupName').as('singName');
        // Empty field - "Name is required"
        cy.get('@singName').should('be.empty').click();
        cy.get('.modal-content .modal-footer').should('be.visible').click();
        // Check that border is red
        cy.get('@singName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.invalid-feedback').as('invalidFeedback');
        cy.get('@invalidFeedback').should('have.text', 'Name required');
        // Wrong data - "Name is invalid"
        cy.get('@singName').type('Помилкові дані');
        cy.get('@invalidFeedback').should('have.text', 'Name is invalid');
        cy.get('@singName').clear();
        cy.get('@singName').type('13124!!#)%#');
        cy.get('@invalidFeedback').should('have.text', 'Name is invalid');
        cy.get('@singName').clear();
        cy.get('@singName').type('A');
        // Wrong length - "Name has to be from 2 to 20 characters long"
        cy.get('@invalidFeedback').should('have.text', 'Name has to be from 2 to 20 characters long');
        cy.get('@singName').clear();
        cy.get('@singName').type('aaaaaaaaaaaaaaaaaaaaa');
        cy.get('@invalidFeedback').should('have.text', 'Name has to be from 2 to 20 characters long');
    });

  it('Verify field LastName', () => {
        cy.get('.btn-primary').should('be.visible').click();
        cy.get('#signupLastName').as('lastName');
        // Empty field - "Last name is required"
        cy.get('@lastName').should('be.empty').click();
        cy.get('.modal-content .modal-footer').should('be.visible').click();
        // Check that border is red
        cy.get('@lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.invalid-feedback').as('invalidFeedback');
        cy.get('@invalidFeedback').should('have.text', 'Last name required');
        // Wrong data - "Last name is invalid"
        cy.get('@lastName').type('Тест');
        cy.get('@invalidFeedback').should('have.text', 'Last name is invalid');
        cy.get('@lastName').clear();
        cy.get('@lastName').type('167!#($#@!');
        cy.get('@invalidFeedback').should('have.text', 'Last name is invalid');
        cy.get('@lastName').clear();
        cy.get('@lastName').type('B');
        // Wrong length - "Last name has to be from 2 to 20 characters long"
        cy.get('@invalidFeedback').should('have.text', 'Last name has to be from 2 to 20 characters long');
        cy.get('@lastName').clear();
        cy.get('@lastName').type('testtesttesttesttesttesttest');
        cy.get('@invalidFeedback').should('have.text', 'Last name has to be from 2 to 20 characters long');
   
    });
    it('Verify field Email', () => {
        cy.get('.btn-primary').should('be.visible').click();
        cy.get('#signupEmail').as('singEmail');
        // For empty field - "Email required"
        cy.get('@singEmail').should('be.empty').click();
        cy.get('.modal-content .modal-footer').should('be.visible').click();
        // Check that border is red
        cy.get('@singEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.invalid-feedback').as('invalidFeedback');
        cy.get('@invalidFeedback').should('have.text', 'Email required');
        // Wrong data - "Email is incorrect"
        cy.get('@singEmail').type('Тест пошти');
        cy.get('@invalidFeedback').should('have.text', 'Email is incorrect');
        cy.get('@singEmail').clear();
        cy.get('@singEmail').type('afwa214214@!$');
        cy.get('@invalidFeedback').should('have.text', 'Email is incorrect');
        cy.get('@singEmail').clear();
        cy.get('@singEmail').type('C');

    });
    it('Verify field Password', () => {
        cy.get('.btn-primary').should('be.visible').click();
        cy.get('#signupPassword').as('signPassword');
        // For empty field error - "Password required"
        cy.get('@signPassword').should('be.empty').click();
        cy.get('.modal-content .modal-footer').should('be.visible').click();
        // Check that border is red
        cy.get('@signPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.invalid-feedback').as('invalidFeedback');
        cy.get('@invalidFeedback').should('have.text', 'Password required');
        // Wrong data - "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
        cy.get('@signPassword').type('1ab2cdA');
        cy.get('@invalidFeedback').should('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('@signPassword').clear();
        cy.get('@signPassword').type('1ab2cdA8913Ac06C');
        cy.get('@invalidFeedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('@signPassword').clear();
        cy.get('@signPassword').type('12345a789111111');
        cy.get('@invalidFeedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('@signPassword').clear();
        cy.get('@signPassword').type('12345A789111111');
        cy.get('@invalidFeedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('@signPassword').clear();

    });
    it('Verify Field Re-enter password', () => {
        cy.get('.btn-primary').should('be.visible').click();
        cy.get('#signupPassword').as('signPassword');
        cy.get('#signupRepeatPassword').as('signRepeatPassword');
        // For empty field error - "Password required"
        cy.get('@signRepeatPassword').should('be.empty').click();
        cy.get('.modal-content .modal-footer').should('be.visible').click();
        // Check that border is red
        cy.get('@signRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.invalid-feedback').as('invalidFeedback'); 
        cy.get('@invalidFeedback').should('have.text', 'Re-enter password required');
        // Passwords do not match
        cy.get('@signPassword').type('123A4567c1451');
        cy.get('@signRepeatPassword').type('123A4567c1452');
        cy.get('@invalidFeedback').should('have.text', 'Passwords do not match');
    });
    it('Verify Button Register', () => {
        cy.get('.btn-primary').should('be.visible').click();
        cy.get('#signupName').type('Kirill', { sensitive: true });
        cy.get('#signupLastName').type('Plotnikov');
        cy.get('#signupEmail').type('Kirillplotnikov' + getRandomNumber() + '@gmail.com', { sensitive: true });
        cy.get('#signupPassword').type('123A4567c1451');
        cy.get('#signupRepeatPassword').type('123A4567c1451');
        cy.get('.modal-content [class="btn btn-primary"]').should('be.visible').click();

    });
    it('Verify Button Register disabling', () => {
        cy.get('.btn-primary').should('be.visible').click();
        cy.get('#signupName').as('singName');
        // Empty field - "Name is required"
        cy.get('@singName').should('be.empty').click();
        cy.get('.modal-content .modal-footer').should('be.visible').click();
        cy.get('[class="btn btn-primary"]').should('be.disabled');
      
    });
    it('Log in with custom function', () => {
        cy.get('.header_signin').should('be.visible').click();
        cy.login('Kirillplotnikov@gmail.com', '123A4567c1451');
  
    });
});


function getRandomNumber(min = 99, max = 9999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
