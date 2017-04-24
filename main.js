#!/usr/bin/env node

const commander = require('commander');
const start_app = require('./lib');
const config = {};

commander
  .version('1.0.0')
  .option('-c, --connstr <connect str>', 'mysql connection string')
  .option('-p, --port <port>', 'server listen port', parseInt)
  .option('-l, --listen <host>', 'listen host')
  .parse(process.argv);

config.conn_str = commander.connstr || "mysql://user:pass@localhost/db";
config.port = commander.port || 3307;
config.listen = commander.listen || '0.0.0.0';

start_app(config);
