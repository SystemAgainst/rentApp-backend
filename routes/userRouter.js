const Router = require('express');
const router = new Router();
const controller = require('../controller/userController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/auth', authMiddleware, controller.check);

module.exports = router;

