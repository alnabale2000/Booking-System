const { query } = require("../../db/db");
const connection = require("../../db/db");
const bcrypt = require("bcrypt");

const createNewSellerAccount = async (req, res) => {
    const { email, password, username, filed, summary } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO 
        sellers(username,filed,summary,email,pass)
        VALUES (?,?,?,?,?);`;
        45;
        const data = [username, filed, summary, email.toLowerCase(), hashedPassword];

        connection.query(query, data, (err, result) => {
            if (err) res.status(404).json(err);
            res.status(201).json("Seller Account Created");
        });
    } catch (error) {
        console.log(error);
        res.status(404).json("Failed to create Resturant Account");
    }
};

const getAllSellers = async (req, res) => {
    // To Resolve cors blocking problem
    res.setHeader("Access-Control-Allow-Origin", "*");

    let query;
    const sellerName = req.params.name;
    sellerName === "none"
        ? (query = "SELECT id,username,filed,summary FROM sellers")
        : (query = `SELECT id,username,filed,summary FROM sellers WHERE username LIKE N'%${sellerName}%'`);
    connection.query(query, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(200).json(result);
    });
};

module.exports = {
    createNewSellerAccount,
    getAllSellers,
};
