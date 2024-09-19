Cypress.Commands.add('login', () => {
          cy.session('login', () => {
            cy.fixture(Cypress.env('client')).then((config) => {
              cy.visit(config.baseUrl);
              cy.get('[data-cy=accept-all-cookies]').click();
              cy.get('[data-cy=login-button]').click();
              cy.origin(config.baseUrl, () => {
                cy.get('[data-cy=username]').type(config.username);
                cy.get('[data-cy=password]').type(config.password);
                cy.get('[data-cy=sign-in]').click();
              });
            });
          });
        });