Este projeto foi desenvolvido para o teste da empresa Frente Corretora de Câmbio.

# Tecnologias utilizadas

- NodeJS (v16)
- TypeScript
- SQLite
- ReactJS

# Instruções de execução

## Backend

O backend tem como base de dados SQLite ja montado em (./backend/src/database/db.sqlite) caso seja necessário remontar o banco exclua este arquivo e rode o seguinte comando no diretório backend.

```sh
npm run migrate:latest
```

Para rodar o backend é necessário executar os seguintes comandos no diretório backend.

```sh
npm install
npm start
```

Na criação do usuário, existe o campo 'admin' que gerencia a visualização dos pacotes e por padrão é criado como 'false', a manipulação desse campo para 'true' deve ser feita diretamente no backend com o método PUT passando os dados do cliente desejado.

## Frontend

Para rodar o frontend é necessário executar os seguintes comandos no diretório frontend e desejável NodeJS V16.

```sh
npm install
npm start
```

Há um usuário com a permissão de admin já habilitado, para acessá-lo basta fazer o login com as credenciais:

CPF: ```sh 518.009.500-04```
Password: ```sh admin```
