# Projeto emfcars_api

API emfcars é um projeto do teste READI.docpronto o qual teve como objetivos:

- Construido uma API Rest
- Desenvolvido um sistema CRUD de carros, marcas e transmissão do veiculo.
- Utilização do NodeJS
- Utilização do TypeScript
- Utilização do Express
- Utilização do Prisma ORM para lidar com bando de dados
- Utilização do banco de dados relacional PostgreSQL com schemas do Prisma
- Estrutura para lidar com Regras de Negócio da aplicação
- Aprimorando a elaboração de casos de uso onde são utilizados validações de autenticação, permissão de rotas e recursos
- Praticado e respeitado os princípios SOLID na arquitetura de aplicações para deixar o código mais legível e limpo

# Como Usar?

1 - Para executar esta aplicação, você precisará ter instalado no seu computador:

- [Git](https://git-scm.com/doc)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker-com-Docker-Compose](https://jolly-helenium-84a.notion.site/Instalar-Docker-e-Docker-Compose-4b89ba48d1a947089916c7e170caa374)
- [Beekeeper](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/) - ARQUIVO DO INSOMNIA.JSON NO REPOSITÓRIO(DOC)

# Instalar database

```bash
# Clone esse repositório:
$ git clone https://github.com/emffor/emfcars_api

# Entre no repositório:
$ cd emfcars_api

# IMPORTANTE: Instale as dependências:
$ yarn

# IMPORTANTE: Instanciar o Docker com Docker-Compose para subir o container e iniciar a aplicação:
$ docker-compose up

# IMPORTANTE: Criar a estrutura de tabelas (Caso não criar não funcionará):
$ yarn prisma migrate dev

# IMPORTANTE: Para rodar a aplicação:
$ yarn dev

# Para rodar o Prisma Studio caso deseje ver os dados do banco de dado.
$ yarn prisma studio

# Observação
Rode o banco no beekeepers ou de preferência, se não pode ser que possa algum dar erro.

# Dados do banco para acessar o beekeepers ou de preferência
- Connection type: PostgreSQL
- Host: localhost
- Port: 5432
- User: admin
- Password: admin
- Default Database: emfcars_database

```
