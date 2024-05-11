const User = require('./userModel');
const Passport = require('./passportModel');
const Apartment = require('./apartmentModel');
const ApartmentInfo = require('./apartmentInfoModel');
const ApartmentStatus = require('./apartmentStatusModel');
const Payment = require('./paymentModel');

// User and Passport associations
User.belongsTo(Passport, { foreignKey: 'passport_id', as: 'passport' });
Passport.hasOne(User, { foreignKey: 'passport_id', as: 'user' });

// Apartment associations
Apartment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Apartment, { foreignKey: 'user_id', as: 'apartments' });

Apartment.belongsTo(ApartmentInfo, { foreignKey: 'apartment_info_id', as: 'info' });
ApartmentInfo.hasOne(Apartment, { foreignKey: 'apartment_info_id', as: 'apartment' });

Apartment.belongsTo(ApartmentStatus, { foreignKey: 'apartment_status_id', as: 'status' });
ApartmentStatus.hasMany(Apartment, { foreignKey: 'apartment_status_id', as: 'apartments' });

// Payment associations
Payment.belongsTo(Apartment, { foreignKey: 'apartment_id', as: 'apartment' });
Apartment.hasMany(Payment, { foreignKey: 'apartment_id', as: 'payments' });

module.exports = {
    User,
    Passport,
    Apartment,
    ApartmentInfo,
    ApartmentStatus,
    Payment,
};