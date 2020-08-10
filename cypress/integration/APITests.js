/// <reference types="cypress" />


describe('API Requests', () => {
    it('do the api testing', ()=>{
        cy.request('https://emumba-test.herokuapp.com/trend').then((response) => {
            expect(response.status).to.eq(201)
            expect(response.duration).to.not.be.greaterThan(1000)
            expect(parseInt(response.headers[`content-length`])).to.be.lessThan(2048)
        })
        cy.request('POST', 'https://emumba-test.herokuapp.com/user', 
        { 
            'first_name': 'Ali',
            'last_name': 'Ahmad',
            'email': 'unique.id.everytime12321299114891@gmail.com', //change this email address before running the rest because multiple users cant have same email id
            'password': '12345',
            'confirm_password': '12345'    
        }).then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.status).to.eq(200)
            expect(response.duration).to.not.be.greaterThan(1000)
            expect(response.body).to.have.property('email')
            expect(response.body).to.have.property('first_name')
            expect(response.body).to.have.property('last_name')
            expect(response.body).to.have.property('plan')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('access_token')
            expect(response.body).to.have.property('refresh_token')
            expect(parseInt(response.headers[`content-length`])).to.be.lessThan(2048)

        })

        cy.request('POST', 'https://emumba-test.herokuapp.com/user/login', 
        { 
            'email': 'newest.ahmad12@gmail.com',
            'password': '12345',
            'confirm_password': '12345'    
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.not.be.greaterThan(2000)
            expect(response.body).to.have.property('email')
            expect(response.body).to.have.property('first_name')
            expect(response.body).to.have.property('last_name')
            expect(response.body).to.have.property('plan')
            expect(response.body).to.have.property('id')
            expect(parseInt(response.headers[`content-length`])).to.be.lessThan(2048)
            })       
    })  
})