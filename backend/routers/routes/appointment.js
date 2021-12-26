const express = require("express");

const {
    confirmAppointment,
    getAppointmentsByUserId,
    getAppointmentsBySellerId,
    deleteAppointment,
    updateAppointmentStatus,
} = require("./../controllers/appointment");

const appointmentRouter = express.Router();

appointmentRouter.post("/add_appointment", confirmAppointment);
appointmentRouter.get("/user_appointments/:id", getAppointmentsByUserId);
appointmentRouter.get("/seller_appointments/:id", getAppointmentsBySellerId);

// used post to send id
appointmentRouter.post("/delete_appointment", deleteAppointment);
appointmentRouter.put("/update_appointment", updateAppointmentStatus);

module.exports = appointmentRouter;
