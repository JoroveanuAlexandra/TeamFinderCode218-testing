//1
describe('Routes',()=>{
  it('passes',()=>{
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/profile')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/department')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/project')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin')
})
})
//2
describe('Verify the functionality of the buttons',()=>{
  it("verify buttons",()=>{
  cy.viewport(1920, 1080)
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
  cy.get('button[type="submit"]').click();
  cy.get('button').contains('Register').click();
  cy.get('button').contains('Login').click();
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
  cy.get('button').contains('Go to Login Page').click();
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/profile')
  cy.get('button').contains('Add Skills').click();
})
})

//3
describe('Login-Succeed', () => {
  it('Verify that Login functionality works with valid credentials.', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
    cy.get('[name="email"]').type("test@example.com")
    cy.get('[name="password"]').type("password123")
    cy.contains('Login').click();
  })
})
//4
describe('Login-Failed', () => {
  it('Verify that Login functionality works with valid credentials.', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
    cy.get('[name="email"]').type("test")
    cy.get('[name="password"]').type("pass")
    cy.contains('Login').click();
  })
})
//5
describe('Register-Succeed', () => {
    it('Verify that Login functionality works with valid credentials.', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
      cy.get('[placeholder="Name"]').type("Nume Prenume")
      cy.get('[placeholder="email"]').type("test@example.com")
      cy.get('[placeholder="password"]').type("password123")
      cy.get('[placeholder="orgName"]').type("Organization")
      cy.get('[placeholder="orgAdrress"]').type("Country, City, Street, Number")
      cy.contains('Login').click();
    })
  })
//6
describe('Register-Failed', () => {
    it('Verify that Login functionality works with valid credentials.', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
      cy.get('[placeholder="Name"]').type("Nume ")
      cy.get('[placeholder="email"]').type("test")
      cy.get('[placeholder="password"]').type("pass")
      cy.get('[placeholder="orgName"]').type("123")
      cy.get('[placeholder="orgAdrress"]').type("Country")
      cy.contains('Login').click();
    })
  })
//7
describe('Display Employees', () => {
  beforeEach(() => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/department');
  });

  it('should verify the display of department members', () => {
    cy.contains('Department Members').click();
    cy.get('h3').contains('Department Members').should('be.visible');
  });

  it('should verify the display of unassigned department members', () => {
    cy.contains('Unassigned Members').click();
    cy.get('h3').contains('Unassigned Department Employees').should('be.visible');
  });

  it('should verify the display of department skills', () => {
    cy.contains('Manage Skills').click();
    cy.get('h3').contains('Department Skills').should('be.visible');
  });
});
//8
describe('Administration Page', () => {
  it('Redirect to employee sign-up page when "Employee sign-up link" is clicked', () => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin');
    if(cy.contains('Employee sign-up link').click())
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/employee-register');
  });

});
//9
describe('', () => {
  it('',() => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin');
    cy.contains('Show Employees').click();
    cy.contains('Show Team Roles').click();
    cy.contains('Manage Departments').click();
  });
});


