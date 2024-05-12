const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    is_paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    apartment_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
});

module.exports = Payment;
