const Router = require('express');
const router = new Router();
const controller = require('../controller/userController');


router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.get('/auth');
router.get('/users', controller.getUsers);

module.exports = router;

