const express = require("express");

const { createNewSellerAccount } = require("./../controllers/sellers");

const SellersRouter = express.Router();

SellersRouter.post("/sellers", createNewSellerAccount);

module.exports = SellersRouter;
