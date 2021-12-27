const express = require("express");
const app = express();
app.use(express.json());

const usersRouter = require("./routers/routes/users");
const sellersRouter = require("./routers/routes/sellers");
const authRouter = require("./routers/routes/auth");
const appointmentRouter = require("./routers/routes/appointment");

app.use(usersRouter);
app.use(sellersRouter);
app.use(authRouter);
app.use(appointmentRouter);

const cors = require("cors");
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});

// app.use(function (request, response, next) {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
