const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'police', 'court', 'prison'),
        allowNull: false,
    },
    permissions: {
        type: DataTypes.JSON, // Store permissions as a JSON object
        allowNull: true,
    },
});

module.exports = User;