
describe('Create cars entity', () => {
    beforeEach(() => {
    const baseUrl = Cypress.env('baseUrl');
    cy.visit(baseUrl, {
        auth: {
          username: "guest",
          password: "welcome2qauto"
        }
      });
      cy.get('.header_signin').should('be.visible').click();
      cy.login(Cypress.env('username'), Cypress.env('password'));
    });

    it('Add car', () => {  
      cy.get('.sidebar').should('be.visible');
      cy.contains('button', 'Add car').should('be.visible').click();
      cy.get('#addCarBrand').select('BMW');
      cy.get('#addCarModel').select('5');
      cy.get('#addCarMileage').type('12412');
      cy.get('.modal-footer .btn-primary').should('be.visible').click();
      cy.get('.car-body').should('be.visible');
      cy.contains('Fuel expenses').should('be.visible').click();

      cy.get('[class="btn btn-primary"]').should('be.visible').click();
      cy.get('#addExpenseMileage').clear().type('12600');
      cy.get('#addExpenseLiters').type('1200');
      cy.get('[class="form-control ng-untouched ng-pristine ng-invalid"]').type('686');
      cy.get('.modal-footer .btn-primary').should('be.visible').click();

      cy.get('.expenses_table').should('be.visible');
      cy.get('[routerlink="garage"]').should('be.visible').click();
      cy.get('[class="car_edit btn btn-edit"]').should('be.visible').click();
      cy.get('[class="btn btn-outline-danger"]').should('be.visible').click();
      cy.get('[class="btn btn-danger"]').should('be.visible').click();
      cy.get('.panel-empty_message').should('be.visible');   
    });
});