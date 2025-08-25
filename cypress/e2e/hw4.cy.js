describe('Create cars entity API', () => {
    let todayStr;
    beforeEach(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // месяцы от 0 до 11
        const dd = String(today.getDate()).padStart(2, '0');

        todayStr = `${yyyy}-${mm}-${dd}`;

        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
        cy.get('.header_signin').should('be.visible').click();
        cy.login('Marcoozfrend@gmail.com', 'Qwerty123');
    });

    it('Intercept car response test', () => {
        cy.get('.panel-page .btn-primary').should('be.visible').click();
        cy.get('#addCarBrand').select('Porsche');
        cy.get('#addCarModel').select('911');
        cy.get('#addCarMileage').type('2500');
        cy.intercept('POST', '/api/cars').as('postCars');
        cy.get('.modal-footer .btn-primary').should('be.visible').click();

        cy.wait('@postCars').then(out => {
            expect(out.response.statusCode).to.eq(201);
            const carId = out.response.body.data.id;
            cy.request('/api/cars').then(cars => {
                const hasId = cars.body.data.some(car => car.id === carId);
                expect(hasId).to.be.true;
            });

            cy.request('POST', '/api/expenses',
                {
                    "carId": carId,
                    "reportedAt": todayStr,
                    "mileage": 2505,
                    "liters": 11,
                    "totalCost": 11,
                    "forceMileage": false
                }
            )
        });
        cy.get('[routerlink="expenses"]').click();
        cy.get('tbody').contains('2505');
        cy.get('tbody').contains('11L');
        cy.get('tbody').contains('11.00 USD');

        cy.get('[routerlink="garage"]').should('be.visible').click();
        cy.get('[class="car_edit btn btn-edit"]').should('be.visible').click();
        cy.get('[class="btn btn-outline-danger"]').should('be.visible').click();
        cy.get('[class="btn btn-danger"]').should('be.visible').click();
        cy.get('.panel-empty_message').should('be.visible');
    });
});