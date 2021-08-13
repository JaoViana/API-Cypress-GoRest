const newuser = require('../Addloads/newuser.json')
function AllUsers() {
    return cy.request({
        method: 'GET',
        url: 'users/1595',
        failOnStatusCode: false,
    })
}

export{AllUsers}