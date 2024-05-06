const ApiError = require('../errors/apiError');
const { NOT_FOUND_ID} = require("../errors/constants");

class UserController {
    async register(req, res) {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    async login(req, res) {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    async check(req, res, next) {
        try {
            const { id } = req.query;
            if (!id) {
                return next(ApiError.badRequest(NOT_FOUND_ID))
            }
            res.json(id);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new UserController();
