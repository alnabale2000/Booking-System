const connection = require("./../../db/db");
const bcrypt = require("bcrypt");

const createNewAccount = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO users(username,email,pass) VALUES (?,?,?);`;
        const data = [username, email.toLowerCase(), hashedPassword];
        connection.query(query, data, (err, result) => {
            if (err) res.status(404).json(err);
            res.status(201).json("User Added");
        });
    } catch (error) {
        console.log(error);
        res.status(404).json("Failed to create Account");
    }
};

module.exports = {
    createNewAccount,
};
