const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    apartment_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
});

module.exports = Payment;
