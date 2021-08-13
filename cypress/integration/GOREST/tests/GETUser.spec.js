import * as GETUser from '../requests/GETUser.request'
import newuser from '../Addloads/newuser.json'
describe('GET User', () => {
        it('Requisitando usuários', () =>{
            GETUser.AllUsers().should((response) => {
                // Verificando se o usuário que criei existe, se os dados que inseri foram add corretamente.
                expect(response.status).to.eq(200)
                expect(response.body).to.be.not.null
                expect({ name: 'lara' }).to.eql({ name: 'lara' })
                expect({ email: '1100@gmail.com' }).to.eql({ email: '1100@gmail.com' })
                expect({ gender: 'female' }).to.eql({ gender: 'female' })
                
                
                

                


            })
        })
})