const express = require("express");

const { createNewAccount } = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/users", createNewAccount);

module.exports = usersRouter;
