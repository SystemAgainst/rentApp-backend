const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');



const ApartmentInfo = sequelize.define('apartment_info', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
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
});

module.exports = ApartmentInfo;
