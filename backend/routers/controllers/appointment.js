const connection = require("./../../db/db");
const { query } = require("../../db/db");

const confirmAppointment = (req, res) => {
    const { phoneNumber, appDate, hour, sellerName, sellerId, username, userId, appStatus } =
        req.body;
    const query = `INSERT INTO appointment(phonenumber,app_date,hour,seller_name,sellerId,username,userId,
        app_status) VALUES (?,?,?,?,?,?,?,?)`;

    const data = [phoneNumber, appDate, hour, sellerName, sellerId, username, userId, appStatus];
    connection.query(query, data, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(201).json("Appointment Confirmed");
    });
};

const getAppointmentsByUserId = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT userId,seller_name,app_date,app_status FROM appointment WHERE userId=?;`;
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(200).json(result);
    });
};

module.exports = {
    confirmAppointment,
    getAppointmentsByUserId,
};
