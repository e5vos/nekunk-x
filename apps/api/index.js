const express = require("express");
const app = express();
const cors = require("cors");
const signale = require("signale");
const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose.connection;
const getData = require("./routes/getData");
const modifyData = require("./routes/modifyData");

app.use(cors());
app.use(express.json({ extended: false }));
app.use("/getData", getData);
app.use("/modifyData", modifyData);

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  signale.success("Csatlakozva az adatbázishoz!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => signale.debug(`A szerver a ${PORT}-os porton fut.`));
