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

module.exports = {
    createNewSellerAccount,
};
