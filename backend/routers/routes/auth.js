const express = require("express");

const { login, SellerLogin } = require("./../controllers/auth");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/sellerLogin", SellerLogin);

module.exports = authRouter;
