const express = require('express'),
  mysql_to_rest = require("mysql-to-rest"),
  MySQLMetadata = require('mysql-metadata').MySQLMetadata,
  mysql = require('mysql');

function not_found(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
}

function err_process(err, req, res, next) {
  res.status(err.status || 500);
  res.json({error: err.message});
  console.error(err.stack)
}

function create_mysql_pool(conn_str) {
  return mysql.createPool(conn_str, (err, db) => {
    if (err) 
      throw err
  });
}

function metadata(conn) {
  const meta = new MySQLMetadata(conn);
  const db_name = conn.config.connectionConfig.database;
  return function (req, res, next) {
    meta
      .dbMeta(db_name)
      .then(meta => {
        res.json(meta);
      })
      .catch(err => {
        next(err);
      })
  }
}

function start_app(config) {
  const server = express();
  const conn = create_mysql_pool(config.conn_str);

  // routes
  server.use("/api/metadata", metadata(conn));
  mysql_to_rest(server, conn);
  server.use(not_found);
  server.use(err_process);

  server.listen(config.port, config.listen, () => {
    console.log(`server running`)
  })
  return server;
}

module.exports = start_app;