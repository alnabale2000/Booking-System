const express = require("express");

const { confirmAppointment, getAppointmentsByUserId } = require("./../controllers/appointment");

const appointmentRouter = express.Router();

appointmentRouter.post("/add_appointment", confirmAppointment);
appointmentRouter.get("/user_appointments/:id", getAppointmentsByUserId);

module.exports = appointmentRouter;
