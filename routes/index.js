const express = require("express");
const userRouter = require("./userRoutes");
const wishListRouter = require("./wishlistRoutes");
const { validateToken } = require('../healpers/token.Validator')
const router = express.Router();

router.use('/user', userRouter);
router.use('/wishlist',  validateToken, wishListRouter);

module.exports = router;