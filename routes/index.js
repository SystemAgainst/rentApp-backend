const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const apartmentRouter = require('./apartmentRouter');

router.use('/user', userRouter);
router.use('/apartment', apartmentRouter);

module.exports = router;
