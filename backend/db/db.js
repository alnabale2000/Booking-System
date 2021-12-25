const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const http = require("http");
const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id: " + connection.threadId);
});

server.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = connection;
