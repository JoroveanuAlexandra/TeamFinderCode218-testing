
describe('Routes',()=>{
  it('Passes',()=>{
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/profile')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/department')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/project')
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin')
})
})


describe('Verify buttons',()=>{
  it("Verify the functionality of the buttons",()=>{
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


describe('Login-Succeed', () => {
  it('Verify that Login functionality works with valid credentials.', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
    cy.request('POST', '/login', {
      email: 'test@email.com',
      pass: 'testPass'
      });
    cy.contains('Login').click();
  })
})


describe('Login-Failed', () => {
  it('Verify that Login functionality works with valid credentials.', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
    cy.request('POST', '/login', {
    email: 'test',
    pass: 'test'
    });
    cy.contains('Login').click();
  })
})


describe('Register-Succeed', () => {
    it('Verify that Login functionality works with valid credentials.', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
      cy.get('[placeholder="Name"]').type("Nume Prenume")
      cy.request('POST', '/login', {
      email: 'test@email.com',
      pass: 'testPass'
      });
      cy.get('[placeholder="orgName"]').type("Organization")
      cy.get('[placeholder="orgAdrress"]').type("Country, City, Street, Number")
      cy.contains('Login').click();
    })
  })


describe('Register-Failed', () => {
    it('Verify that Login functionality works with valid credentials.', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
      cy.get('[placeholder="Name"]').type("Nume ")
      cy.request('POST', '/login', {
      email: 'test',
      pass: 'test'
      });
      cy.get('[placeholder="orgName"]').type("123")
      cy.get('[placeholder="orgAdrress"]').type("Country")
      cy.contains('Login').click();
    })
  })


describe('Display Employees', () => {
  beforeEach(() => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/department');
  });

  it('Should verify the display of department members', () => {
    cy.contains('Department Members').click();
    cy.get('h3').contains('Department Members').should('be.visible');
  });

  it('Should verify the display of unassigned department members', () => {
    cy.contains('Unassigned Members').click();
    cy.get('h3').contains('Unassigned Department Employees').should('be.visible');
  });

  it('Should verify the display of department skills', () => {
    cy.contains('Manage Skills').click();
    cy.get('h3').contains('Department Skills').should('be.visible');
  });
});


describe('Administration Page', () => {
  it('Redirect to employee sign-up page when "Employee sign-up link" is clicked', () => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin');
    if(cy.contains('Employee sign-up link').click())
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/employee-register');
  });
});


describe('Admin Page', () => {
  it('Verify if the buttons show the data',() => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin');
    cy.contains('Show Employees').click();
    cy.contains('Show Team Roles').click();
    cy.contains('Manage Departments').click();
  });
});

describe('Display Projects', () => {
  beforeEach(() => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/project');
  });

  it('Should verify the display of "Create Project" element', () => {
    cy.contains('Toggle Create Project').click();
    cy.get('.create-project-section').should('be.visible');
  });
  it('Should verify the display of the project details', () => {
    cy.contains('Toggle Project Details').click();
    cy.get('.projects-grid').should('be.visible');
  });
});


describe('Create Project with Valid Data', () => {
  beforeEach(() => {
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/project'); 
    cy.contains('Toggle Create Project').click();
  });
  it('Should create a project with valid data', () => {
    cy.get('#name').type('Project Name');
    cy.get('#prPeriod').select('Fixed');
    cy.get('#startDate').type('2024-03-16');
    cy.get('#endDate').type('2024-04-16');
    cy.get('#prStatus').select('Not Started');
    cy.get('#description').type('Project Description');
    cy.get('#tehStack').type('Tech Stack');
    cy.get('input[type="text"][placeholder="Value"]').type('Role Value');
    cy.get('#level').select('1');
    cy.get('input[type="text"][placeholder="Experience"]').type('Experience Value');
    cy.get('button').contains('Create Project').click();
 });
});


