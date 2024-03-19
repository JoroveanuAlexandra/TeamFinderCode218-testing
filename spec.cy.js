
describe('Routes',()=>{
  it('Visit the sign-up page by clicking',()=>{
  cy.viewport(1920, 1080)
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')})
  it('Visit the login page by clicking',()=>{
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
  })
  it('Visit the profile page by clicking',()=>{
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/profile')
  })
  it('Visit the administrator departments page by clicking',()=>{
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/department')})
  it('Visit the project manager page by clicking',()=>{
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/project')})
  it('Visit the admin organization page by clicking',()=>{
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin')
})
})


describe('Verify buttons on the login and sign-up page',()=>{
  it("Verify the functionality of the buttons",()=>{
  cy.viewport(1920, 1080)
  cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
  cy.request('POST', '/login', {
    email: 'test@email.com',
    pass: 'testPass'
    });
  cy.xpath("//button[normalize-space()='Login']").click();
  cy.xpath("//button[normalize-space()='Register']").click()
  cy.xpath("//button[normalize-space()='Go to Login Page']").click()

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
    cy.xpath("//button[normalize-space()='Login']")
  })
})


describe('Login-Failed', () => {
  it('Verify that Login functionality works with invalid credentials.', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/login')
    cy.request('POST', '/login', {
    email: 'test',
    pass: 'test'
    });
    cy.xpath("//button[normalize-space()='Login']")
  })
})


describe('Register-Succeed', () => {
    it('Verify that Login functionality works with valid credentials.', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/signup')
      cy.get('placeholder="Name"').type("Nume Prenume");
      cy.request('POST', '/login', {
      email: 'test@email.com',
      pass: 'testPass'
      });
      cy.get('[placeholder="orgName"]').type("Organization")
      cy.get('[placeholder="orgAdrress"]').type("Country, City, Street, Number")
      cy.xpath("//button[normalize-space()='Register']").click()
      cy.xpath("//button[normalize-space()='Go to Login Page']").click()

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
      cy.xpath("//button[normalize-space()='Register']").click()
      cy.xpath("//button[normalize-space()='Go to Login Page']").click()
    })
  })

describe('Employee',()=>{
  beforeEach(() => {
  cy.viewport(1920, 1080)
        cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/profile');
      });
      it('Toggle Current Projects',()=>{
        cy.xpath("//button[normalize-space()='Toggle Current Projects']").click()
        cy.get('h2').contains('Current Projects').should('be.visible')

      })
      it('Toggle Past Projects',()=>{
        cy.xpath("//button[normalize-space()='Toggle Past Projects']").click()
        cy.get('h2').contains('Past Projects').should('be.visible')
      })
      it('Add Skills',()=>{
        cy.xpath("//button[normalize-space()='Add Skills']").click()
        cy.get('h2').contains('Add Skills').should('be.visible')
      })    
})
describe('Department Manager', () => {
  beforeEach(() => {
  cy.viewport(1920, 1080)
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/department');
  });
  it('Verify the notification',()=>{
    cy.get('span').contains('Notifications: ').should('exist')
  })
  it('Should verify the display of department members', () => {
    cy.xpath("//button[normalize-space()='Department Members']").click()
    cy.get('h3').contains('Department Members').should('be.visible');
  });
  it('Should verify the Statistic Show on the screen',()=>{
    cy.xpath("//button[normalize-space()='Show Statistics']").click()
   })
  it('Should verify the display of unassigned department members', () => {
    cy.xpath("//button[normalize-space()='Unassigned Members']").click()
    cy.get('h3').contains('Unassigned Department Employees').should('be.visible');
  });
  it('Should verify the display of the assignment proposal', () => {
    cy.xpath("//button[normalize-space()='Assignment Proposals']").click()
    cy.get('h3').contains('Assignment Proposals').should('be.visible');
  });
  it('Should verify the display of department skills', () => {
    cy.xpath("//button[normalize-space()='Manage Skills']").click()
    cy.get('h3').contains('Department Skills').should('be.visible');
  });
});


describe('Organization Admin', () => {
  beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/admin');
      });
  it('Redirect to employee sign-up page when "Employee sign-up link" is clicked', () => {
    if(cy.get('a').contains('Employee sign-up link'))
     cy.xpath("//a[normalize-space()='Employee sign-up link']").click()
  })
  it('Verify if the buttons Show Employees button present the data',() => {
    cy.xpath("//button[normalize-space()='Show Employees']").click()
    cy.get('h2').contains('Employees').should('be.visible');
  })
  it('Should verify if the click on the Show Team Roles button present the data ',()=>{
    cy.xpath("//button[normalize-space()='Show Team Roles']").click();
    cy.get('h2').contains('Team Roles').should('be.visible');
  })
  it('Should verify if the click on the Manage Departments button present the data ',()=>{
    cy.xpath("//button[normalize-space()='Manage Departments']").click();
    cy.get('h2').contains('Manage Departments').should('be.visible');
  })
});

describe('Project Manger', () => {
  beforeEach(() => {
  cy.viewport(1920, 1080)
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/project')
  });
  it('Should create a project with valid data', () => {
    cy.xpath("//button[normalize-space()='Toggle Create Project']").click()
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
  it('Should view the project details', () => {
    cy.xpath("//button[normalize-space()='Toggle Project Details']").click().should('be.visible')
  });
  it('Should make the Assignment Proposal be visible',()=>{
    cy.xpath("//button[normalize-space()='Toggle Assignment Proposals']").click().should('be.visible')
  })
});
describe('Employee Sign-Up',()=>{
  it('Verify the registration of a new employee',()=>{
    cy.viewport(1920, 1080);
    cy.visit('https://atc-2024-code-218-fe-linux-web-app.azurewebsites.net/employee-register');
    cy.get('[placeholder="Name"]').type("Nume ");
    cy.get('[placeholder="Email"]').type('test@example.com'); // Change email as per your requirement
    cy.get('[placeholder="Password"]').type('password123');
    cy.xpath("//button[normalize-space()='Register']").click()
    cy.xpath("//button[normalize-space()='Go to Login Page']").click()
  })
})
