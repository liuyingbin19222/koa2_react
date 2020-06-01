var mysql = require('mysql');
var db_config = require('../config/config');

var knex = require('knex')({
  client:'mysql',
  connection:{
    host:db_config.mysql.host,
    port:db_config.mysql.port,
    user:db_config.mysql.user,
    password:db_config.mysql.password,
    database:db_config.mysql.db
  }
})

module.exports = {  mysql:knex };
