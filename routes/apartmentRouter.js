const Router = require('express');
const router = new Router();
const controller = require('../controller/apartmentController');
const checkRole = require('../middlewares/checkRoleMiddleware');
const upload = require('../middlewares/upload.js');

router.post('/create', checkRole('LESSOR'), upload.single('img'), controller.create);
router.get('/list', checkRole('LESSOR'), controller.getAll);
router.get('/:id', checkRole('LESSOR'), controller.getOne);

module.exports = router;

