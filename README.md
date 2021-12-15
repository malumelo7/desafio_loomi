# **Solução**

Construir uma API REST para um sistema de gerenciamento de um e-commerce simples. No sistema são gerenciados clientes, produtos e pedidos. A API deve armazenar e devolver os dados quando solicitados. As entidades devem possuir as seguintes propriedades:

**Usuário**

- Email
- Senha

**Cliente**

- Nome
- Email
- Telefone
- Endereço

**Produto**

- Nome
- Preço
- Código
- Características
- Imagem (bônus)

**Pedido**

- Cliente
- Lista de produtos
- Data do pedido
- Status

## **Requisitos**

- A aplicação deverá possuir fluxo de autenticação, com login com email e senha. (**bônus**: o email deverá ser validado através de envio de email de confirmação). Todas as rotas devem possuir autenticação, com exceção da rota de login.
- A aplicação deverá seguir os conceitos REST. (Verbos http, status de resposta etc)
- Todas as entidades devem possuir os métodos CRUD (Create, Read (List e Detail), Update, Delete).
- Os métodos List devem possuir filtros. (Ex. Quero todos os pedidos do cliente x. Ex. Quero todos os pedidos do ano passado)

## **Pontos que serão avaliados**

- Uso do GitHub e Gitflow
- Desenvolvimento de API seguindo a arquitetura REST
- Implementação de operações CRUD
- Conhecimentos de Javascript (ES6+) e Node (express)
- Autenticação (OAuth2, bcrypt, jwt)
- Conhecimentos básicos de segurança
- Tratamento e validação (Yup, ou outra biblioteca) de dados via webservice JSON
- Criação e gerenciamento de banco de dados PostgreSQL em servidor local
- Leitura e Modelagem de dados (UML)
- Conhecimentos de arquitetura e design patterns
- Boas práticas de código (Clean code, ESLint)
- Auto gerenciamento e qualidade das entrega (prazos, prioridades, comunicação)

## **Bônus**

- Deployar a API na aws (ssh, EC2, security group)
- Usar Aws S3 para armazenar as imagens dos produtos
- Usar docker/docker compose
- Testes unitários
- Documentação de APIs com swagger