const sequelize = require('config/db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('User', {
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
        enum: ["USER", "ADMIN"],
        default: ["USER"],
    },
});
