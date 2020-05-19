const express = require('express');
const cors = require ('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(cors({}));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


























/**
 * Rota / Recurso
 */
/**
 * Metodos HTTP:
 * 
 * Get: Buscar uma informação no back-en
 * Post: Cria uma informação no back-end
 * Put: Altera uma informação no back-end
 * Delete: Deletar uma informação no back-end
 */
/**http:localhost:3333/users */

/**
 * Tipos de parâmetros
 * 
 * Query: são parâmetros enviados na rota após o "?"(Filtros, Paginação)
 * Route Params: Parâmetros utilizados para indentificar recursos
 * Request Body: 
 */

 /**
  * SLQ: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
  * NoSQL: MongoDB, CouchDB, etc
  */
