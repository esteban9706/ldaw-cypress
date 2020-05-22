describe('https://www.yotepresto.com/prestamos-en-linea', ()=>{
     describe('load prestamo', ()=>{
          it('should show nuestra mejor tasa',()=>{
              cy.visit('https://www.yotepresto.com/prestamos-en-linea')
              cy.contains('Entendido')
                .click()
              cy.get('#amount')
                .clear()
                .type(25000);
              cy.get('#loan_term')
                .select('24');
              cy.contains('Nuestra mejor tasa').should('be.visible')
          })
     })
})