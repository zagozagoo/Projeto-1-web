const sequelize = require('sequelize');

//configurações da base de dados   db       usuario   senha
const database = new sequelize('projeto', 'projeto', '123',
{
    dialect: 'mssql', host: 'localhost', port: 1433
});

database.sync();

module.exports = database;