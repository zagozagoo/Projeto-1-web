// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const sala = require('./sala'); //como teremos FK, tem que chamar a sala

// Criando a tabela Aluno
const aluno = database.define
    ('Aluno',
        {
            IDAluno:
            {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Nome:
            {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            Idade:
            {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            Sexo:
            {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            Foto:
            {
                type: Sequelize.STRING(50),
                allowNull: false
            }
        }
    );

aluno.belongsTo
    (sala,
        {
            constraint: true, //Garantir integridadde referencial
            foreignKey: 'IDSala'
        }

    );

// Exportando essa tabela
module.exports = aluno;