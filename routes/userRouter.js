const Router = require('express');
const router = new Router();
const controller = require('../controller/userController');


router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/auth', controller.check);

module.exports = router;

