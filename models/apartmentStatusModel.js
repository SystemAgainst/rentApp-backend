
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const ApartmentStatus = sequelize.define('apartment-status', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('available', 'booked', 'maintenance', 'unavailable'),
        allowNull: false
    },
    booking_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
});


module.exports = ApartmentStatus;
