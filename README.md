# API-Cypress-GoRest
--> Testando API utilizando a API GO REST

- Link da API: https://gorest.co.in/

Importante dizer que é preciso criar uma conta na API pois algumas requisições só são feitas se o usuário possuir a API Key, que é informado a criar a conta.

--> Organizando o projeto no Cypress
- Dentro da pasta Cypress > Integration, crie uma pasta referente com o nome da aplicação que irá testar. Deixe seu nome com o nome da aplicação pois assim ficará algo simples de entendimento. 
- Após criar a pasta "GoRest", crie mais 3 pastas dentro dela. Cada uma dessas pastas será de importante uso para cada requisição que iremos fazer. 
1. Addloads: Dentro da pasta de Addloads, add um arquivo .json com a informações que queremos iremos usar para fazer o comando POST. No meu caso, o nome do arquivo foi newuser.json, pois como estou criando um novo usuário, nada melhor que deixar o nome do arquivo como algo intuitivo.
2. Request: Dentro da pasta request criaremos arquivos .request.js.  Para fácil leitura, recomendo criar o arquivo com o nome da requisição que irá testar. Por exemplo:
- GETUser.request.spec - Nesse exemplos usei a requisição + o nome User para saber que estou querendo "puxar" todos os usuários da aplicação.
3. Tests: E por ultimo mas não menos importante, a pasta de testes, aonde iremos organizar nossos testes. Novamente, utilizaremos a lógica que usamos na pasta de Requests: GETUser.spec.js.

