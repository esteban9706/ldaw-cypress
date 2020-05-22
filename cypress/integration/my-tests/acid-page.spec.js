describe('https://acid.com.mx', ()=>{
    describe('Page Loads', ()=>{
        it('Should load page', ()=>{
            cy.visit('https://acid.com.mx')
        })
    })
})

describe('https://acid.com.mx', ()=>{
    describe('Has productos destacados', ()=>{
        it('Should have productos destacados', ()=>{
            cy.visit('https://acid.com.mx')
            cy.contains('PRODUCTOS DESTACADOS')
        })
    })
})

describe('https://acid.com.mx', ()=>{
    describe('Has Descuentos tab', ()=>{
        it('Should click Descuentos tab', ()=>{
            cy.visit('https://acid.com.mx')
            cy.contains('Descuentos').click()
            cy.url().should('include', '/descuentos');
        })
    })
})