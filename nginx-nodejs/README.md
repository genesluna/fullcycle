# Desafio Nginx com Node.js

## Objetivo

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```HTML
<h1>Full Cycle Rocks!</h1>
```

Seguido da lista de nomes cadastrada no banco de dados.

Deve-se gerar o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Deve haver o volume na aplicação para o ambiente de desenvolvimento.
