const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const flatRouter = require('./flatRouter');

router.use('/user', userRouter);
router.use('/flat', flatRouter);

module.exports = router;
