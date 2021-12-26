const express = require("express");

const { confirmAppointment } = require("./../controllers/appointment");

const appointmentRouter = express.Router();

appointmentRouter.post("/add_appointment", confirmAppointment);

module.exports = appointmentRouter;
