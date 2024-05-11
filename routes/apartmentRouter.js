const Router = require('express');
const router = new Router();
const controller = require('../controller/apartmentController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/create', controller.create);
router.get('/list', controller.getAll);
// router.get('/:id', controller.getOne());

module.exports = router;

