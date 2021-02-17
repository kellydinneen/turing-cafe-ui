describe('Home UI', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3001/api/v1/reservations'
    },
    {
      statusCode: 201,
      body: [
        {"id":1,"name":"Christie","date":"12/29","time":"7:00","number":12},
        {"id":2,"name":"Leta","date":"4/5","time":"7:00","number":2}
      ]
    })
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and render the title', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations').should('be.visible')
  });

  it('Should display a form for making reservations', () => {
    cy.get('.reservation-form').children().first().should('have.class', 'name-input')
      .next().should('have.class', 'date-input')
      .next().should('have.class', 'time-input')
      .next().should('have.class', 'number-input')
      .get('.submit-button').contains('Make Reservation')
  });

  it('Should render existing reservations', () => {
    cy.get('.resy-container').children().first().children().first().contains('Christie')
      .next().contains('12/29')
      .next().contains('7:00')
      .next().contains('12 guests')
    cy.get('.resy-container').children().last().children().first().contains('Leta')
      .next().contains('4/5')
      .next().contains('7:00')
      .next().contains('2 guests')
  });
});

describe('Make Reservation UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to fill out form inputs', () => {
    cy.get('input[name="personName"]')
      .type("Test Name")
      .should('have.value', 'Test Name')
      .get('input[name="date"]')
      .type("2/17")
      .should('have.value', '2/17')
      .get('input[name="time"]')
      .type("1:00")
      .should('have.value', '1:00')
      .get('input[name="number"]')
      .type('1')
      .should('have.value', '1')
  })

  it('should be able to fill out the form and click Make Reservation, adding a reservation to the page', () => {
     cy.intercept({
         method: 'POST',
         url: 'hhttp://localhost:3001/api/v1/reservations'
       },
       {
         statusCode: 201,
         body: {"id":100,"name":"Tester","date":"2/17","time":"1:00","number":1}
       })
       .get('input[name="personName"]')
       .type("Tester")
       .get('input[name="date"]')
       .type("2/17")
       .get('input[name="time"]')
       .type("1:00")
       .get('input[name="number"]')
       .type('1')
       .get('.submit-button').click().wait(1000)
      cy.get('.resy-container').children().last().children().first().contains('Tester')
   });
  });
