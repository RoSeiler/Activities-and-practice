module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "ozom_market",
    "host": "127.0.0.1",
    "dialect": "mysql",
    // "define": {
    //   "paranoid": true,
    // }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
