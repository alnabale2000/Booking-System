const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

const usersRouter = require("./routers/routes/users");
const SellersRouter = require("./routers/routes/sellers");

app.use(usersRouter);
app.use(SellersRouter);

const corsOptions = { origin: "*", credentials: true };
app.use(cors(corsOptions));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
