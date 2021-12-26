const express = require("express");

const { createNewSellerAccount, getAllSellers } = require("./../controllers/sellers");

const sellersRouter = express.Router();

sellersRouter.post("/sellers", createNewSellerAccount);
sellersRouter.get("/sellers/:name", getAllSellers);

module.exports = sellersRouter;
