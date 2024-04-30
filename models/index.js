// const sequelize = require('../db')
// const { DataTypes} = require('sequelize')
//
// const User = sequelize.define('user', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
//     email: { type: DataTypes.STRING, unique: true },
//     password: { type: DataTypes.STRING, unique: false },
//     role: { type: DataTypes.STRING, unique: false, defaultValue: "LESSOR" },
//     passport_id: { type: DataTypes.INTEGER },
// })
//
// const Passport = sequelize.define('passport', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, unique: false, allowNull: false },
//     last_name: { type: DataTypes.STRING, unique: false, allowNull: false },
//     middle_name: { type: DataTypes.STRING, unique: false, allowNull: true },
//     passport_number: { type: DataTypes.INTEGER, length: 4 },
//     passport_series: { type: DataTypes.INTEGER, length: 6 },
// })
//
// User.hasOne(Passport)
// Passport.belongsTo(User)
//
// module.exports = {
//     User,
//     Passport,
// }


