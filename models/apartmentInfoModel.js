const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const ApartmentInfo = sequelize.define('ApartmentInfo', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cost:  {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    square: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    room_count: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    tableName: 'apartment_info',
});

module.exports = ApartmentInfo;
