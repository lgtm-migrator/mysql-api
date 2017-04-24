# mysql2api

mysql to api

## install

```bash
npm i -g mysql2api
```

## usage

Baisc Usage

```bash
mysql2api -c mysql://username:password@host/db?multipleStatements=true
```

and server started at `0.0.0.0:3307`

**please make sure multipleStatements param in it**

Full Options

```bash
mysql2api -c [connection str] -p [listen port] -l [listen host]
```
