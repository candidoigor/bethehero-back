const express = require ('express');
const cors = require('cors'); //5.2k (gzipped: 2.1k)

const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do Back-end
 * POST: Criar uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?"(Filtros,paginação,)
 * Route Params: Parâmetros utilizados para identiicar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLITE, POSTGRESQL,ORACLE
  * NoSQL: MongoDB, CouchDB, etc
  */


  /**
   * Driver:
   */
 




