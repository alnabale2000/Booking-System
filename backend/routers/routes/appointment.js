const express = require("express");

const {
    confirmAppointment,
    getAppointmentsByUserId,
    getAppointmentsBySellerId,
} = require("./../controllers/appointment");

const appointmentRouter = express.Router();

appointmentRouter.post("/add_appointment", confirmAppointment);
appointmentRouter.get("/user_appointments/:id", getAppointmentsByUserId);
appointmentRouter.get("/seller_appointments/:id", getAppointmentsBySellerId);

module.exports = appointmentRouter;
