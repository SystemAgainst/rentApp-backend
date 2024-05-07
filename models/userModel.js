const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    roles: {
        type: DataTypes.STRING,
        enum: ["LESSOR", "ADMIN", "RENTER"],
        default: ["LESSOR"],
    },
});

module.exports = User;
