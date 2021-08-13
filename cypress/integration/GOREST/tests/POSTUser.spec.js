import * as POSTUser from '../requests/POSTUser.request'

describe('POST User', () => {
    it("Adicionando um User novo", () => {
        POSTUser.GetUsers().should((response) => {
            expect(response.status).to.eq(201)           
            expect(response.body.log)
            // Requisião POST. Tem como objetivo inserir um novo usuário na API.
            // Sempre que for fazer um novo POST, alterar o ID e o Email que se encontra na pasta de Addloads > newuser.
            

                     
        })
    })
})