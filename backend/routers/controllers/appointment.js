const connection = require("./../../db/db");
const { query } = require("../../db/db");

const confirmAppointment = (req, res) => {
    // To Resolve cors blocking problem
    // res.setHeader("Access-Control-Allow-Origin", "*");

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
    // // To Resolve cors blocking problem
    // res.setHeader("Access-Control-Allow-Origin", "*");

    const id = req.params.id;
    const query = `SELECT id,seller_name,app_date,hour,app_status FROM appointment WHERE userId=?;`;
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(200).json(result);
    });
};

const getAppointmentsBySellerId = async (req, res) => {
    // To Resolve cors blocking problem
    res.setHeader("Access-Control-Allow-Origin", "*");

    const id = req.params.id;
    const query = `SELECT id,username,app_date,hour,phonenumber,app_status FROM appointment WHERE sellerId=?;`;
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(200).json(result);
    });
};

const deleteAppointment = async (req, res) => {
    // To Resolve cors blocking problem
    // res.setHeader("Access-Control-Allow-Origin", "*");
    const id = req.params.id;
    const query = `DELETE FROM appointment WHERE id=?;`;
    const data = [id];
    const deleteCheck = await connection.promise().query(query, data);
    if (!deleteCheck) return res.status(404).json(err);
    res.status(200).json("Appointment Deleted");
};

const updateAppointmentStatus = (req, res) => {
    const { appointmentId, status } = req.body;
    const query = `UPDATE appointment SET app_status=? WHERE id=?;`;
    const data = [status, appointmentId];

    connection.query(query, data, (err, result) => {
        if (err) res.status(404).json(err);

        res.status(200).json("Your response will send to the client");
    });
};

module.exports = {
    confirmAppointment,
    getAppointmentsByUserId,
    getAppointmentsBySellerId,
    deleteAppointment,
    updateAppointmentStatus,
};
