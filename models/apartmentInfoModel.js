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
}, {
    tableName: 'apartment_info',
});

module.exports = ApartmentInfo;
