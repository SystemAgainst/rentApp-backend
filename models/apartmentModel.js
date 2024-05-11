const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Apartment = sequelize.define('apartment', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    rental_cost: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    apartment_status_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    apartment_info_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
});

module.exports = Apartment;
