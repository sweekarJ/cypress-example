describe('Login', () => {
          it('should login once and reuse the session', function () {
            cy.fixture(Cypress.env('client')).then((config) => {
              cy.visit(config.baseUrl);
              cy.get('[data-cy=accept-all-cookies]').click();
              cy.get('[data-cy=login-button]').click();

              cy.origin(config.baseUrl, () => {
                cy.get('[data-cy=username]').type(config.username);
                cy.get('[data-cy=password]').type(config.password);
                cy.get('[data-cy=sign-in]').click();
              });

              cy.url().should('include', '/funds');
            });
          });
        });