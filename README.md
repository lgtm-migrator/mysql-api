# mysql-api

mysql to api

## install

```bash
npm i -g mysql-api
```

## usage

Baisc Usage

```bash
mysql-api -c mysql://username:password@host/db?multipleStatements=true
```

and server started at `0.0.0.0:3307`

**please make sure multipleStatements param in it**

Full Options

```bash
mysql-api -c [connection str] -p [listen port] -l [listen host]
```
