var db_config = require('../config/config');

var knex = require('knex')({
  client:'mysql',
  connection:{
    host:db_config.host,
    port:db_config.port,
    user:db_config.user,
    password:db_config.password,
    database: db_config.db
  }
})

module.exports = { mysql: knex }