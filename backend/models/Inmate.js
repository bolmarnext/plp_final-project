const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Inmate = sequelize.define('Inmate', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    sentenceDuration: {
        type: DataTypes.INTEGER, // in months
        allowNull: false,
    },
    caseFileId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'CaseFiles',
            key: 'id',
        },
    },
});

module.exports = Inmate;