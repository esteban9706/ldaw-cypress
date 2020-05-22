describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', ()=>{
    describe('Page Loads', ()=>{
        it('Should load page', ()=>{
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')
            cy.get('#dispDate')
              .type('05/05/20');
            cy.contains('22')
                .click();
            cy.get('#creditAmount')
            .clear().type('20000.00');
            
            cy.get('#paymentMethod')
                .select("Mensual");

            cy.get('#period')
                .select("2 años")

            cy.get('#rate')
                .clear()
                .type('15.0')
            
            cy.contains('Calcular')
                .click();

            cy.contains('Ahora no')
                .click();

            cy.get('tbody>tr').eq(23)               

        
        
        })
    })
})