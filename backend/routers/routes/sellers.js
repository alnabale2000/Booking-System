const express = require("express");

const { createNewSellerAccount, getAllSellers } = require("./../controllers/sellers");

const SellersRouter = express.Router();

SellersRouter.post("/sellers", createNewSellerAccount);
SellersRouter.get("/sellers", getAllSellers);

module.exports = SellersRouter;
