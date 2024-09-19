describe('Funds Page Tests', () => {
          before(() => {
            cy.login();
          });

          it('should display the funds table', () => {
            cy.get('[data-cy=funds-table]').should('be.visible');
          });

          it('should correctly calculate the total fund amount', () => {
            cy.get('[data-cy=funds-total]').should('contain', '$100,000');
          });
        });