const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { User, Passport } = require("../models/index");
const ApiError = require('../errors/apiError');
const {
    NOT_FOUND_ID,
    INVALID_DATA,
    EMAIL_EXIST,
    INTERNAL_ERROR, USER_NOT_FOUND,
    INCORRECT_PASSWORD,
} = require("../errors/constants");

const generateJwt = (id, email, role, name, last_name, middle_name, passport_number, passport_series) => {
    return jwt.sign(
        {id, email, role, name, last_name, middle_name, passport_number, passport_series},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async register(req, res, next) {
        try {
            const { email, password, role, name, last_name, passport_number, passport_series } = req.body;

            if (!email || !password) {
                return next(ApiError.badRequest(INVALID_DATA));
            }

            const existedUser = await User.findOne({ where: { email } });

            if (existedUser) {
                return next(ApiError.badRequest(EMAIL_EXIST))
            }

            const hashedPassword = await bcrypt.hash(password, 5);

            const passport = await Passport.create({
                name,
                last_name,
                passport_number,
                passport_series,
            });

            const user = await User.create({
                email,
                password: hashedPassword,
                role,
                passport_id: passport.id,
            });

            const token = generateJwt(user.id, user.email, user.role);

            return res.status(201).json({ token });

        } catch (error) {
            console.error(error);
            return next(ApiError.internal(INTERNAL_ERROR));
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne( { where: {email} } );

            if (!user) {
                return next(ApiError.internal(USER_NOT_FOUND))
            }

            let comparedPassword = bcrypt.compareSync(password, user.password);

            if (!comparedPassword) {
                return next(ApiError.internal(INCORRECT_PASSWORD));
            }

            const token = generateJwt(user.id, user.email, user.role);
            return res.json({token});
        } catch (error) {
            return next(ApiError.internal(INTERNAL_ERROR));
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.status(201).json({ token });
    }
}

module.exports = new UserController();
