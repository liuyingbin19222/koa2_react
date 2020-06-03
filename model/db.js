var db_config = require('../config/config');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:db_config.host,
    port:db_config.port,
    user:db_config.user,
    password:db_config.password,
    database: db_config.db
});


module.exports = { 
  connection
 }