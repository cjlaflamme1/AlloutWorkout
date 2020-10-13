const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const htmlRoutes = require('./routes/htmlRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 4300;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  userUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use("/api", routes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.info(`Listening on PORT: ${PORT}`);
});