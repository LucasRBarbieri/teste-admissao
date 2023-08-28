Este projeto foi desenvolvido para o teste da empresa Frente Corretora de Câmbio.

# Tecnologias utilizadas

- NodeJS (v16)
- TypeScript
- SQLite
- ReactJS

# Instruções de execução

## Backend

O backend tem como base de dados SQLite ja montado em (./backend/src/database/db.sqlite) caso seja necessário remontar o banco exclua este arquivo e rode o seguinte comando no diretório backend.
Na criação do usuário, existe o campo 'admin' que gerencia a visualização dos pacotes e por padrão é criado como 'false', a manipulação desse campo para 'true' deve ser feita diretamente no backend com o método PUT passando os dados do cliente desejado.

```sh
npm run migrate:latest
```

Para rodar o backend é necessário executar os seguintes comandos no diretório backend.

```sh
npm install
npm start
```

## Frontend

Para rodar o frontend é necessário executar os seguintes comandos no diretório frontend e desejável NodeJS V16.

```sh
npm install
npm start
```