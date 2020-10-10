const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/index");
require('dotenv').config();

const PORT = process.env.PORT || 4300;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use("/api", routes);

app.listen(PORT, () => {
    console.info(`Listening on PORT: ${PORT}`);
});