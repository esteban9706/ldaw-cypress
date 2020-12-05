describe('https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816', ()=>{
     describe('load ps5 queue', ()=>{
          it('should queue for ps5',()=>{
              cy.visit('https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816')
              cy.contains('Out of Stock')
              cy.reload()
          })
     })
})