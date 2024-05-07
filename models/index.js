const sequelize = require('../config/db');
const User = require('./userModel');
const Passport = require('./passportModel');

User.belongsTo(Passport, { foreignKey: 'passport_id', as: 'passport' });
Passport.hasOne(User, { foreignKey: 'passport_id', as: 'user' });

module.exports = { User, Passport };
