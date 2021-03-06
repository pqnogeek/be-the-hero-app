const express = require('express')

const OrgController = require('./controllers/OrgController')
const ActionController = require('./controllers/ActionController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar/Cadastrar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * TIPOS DE PARÂMETROS:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos (Ex: Retornar dados por ID, acessar rota pelo ID)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (Ex: Criar usuário / alterar informações de um usuário)
  * AYNC / AWAIT: Função assíncrona, aguarda obter todos os dados da requisição para execuar um determinado trecho de código. (Utilizado em interações com Banco de Dados.)
  */

  routes.post('/sessions', SessionController.create) // Rota responsável por acessar o método de login na aplicação (Criação de uma nova sessão de login)

  routes.get('/orgs', OrgController.index) // Acessando método INDEX na rota de listagem de ONGS
  routes.post('/orgs', OrgController.create) // Acessando método CREATE na rota de cadastro de ONGS

  routes.get('/profile', ProfileController.index) // Acessando método que lista casos de uma ONG específica

  routes.get('/actions', ActionController.index) // Acessando método INDEX na rota de cadastro de CASOS
  routes.post('/actions', ActionController.create) // Acessando método CREATE na rota de cadastro de CASOS

  routes.delete('/actions/:id', ActionController.delete) // Acessando método DELETE na rota de cadastro de CASOS

module.exports = routes