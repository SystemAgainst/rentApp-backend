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

    async logout(req, res) {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    async getUsers(req, res) {
        try {
            res.json("server works...");
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new UserController();
