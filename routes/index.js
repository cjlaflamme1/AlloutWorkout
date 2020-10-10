const express = require('express');
const workoutRoutes = require('./workouts');
// require individual route pages here

const Router = express.Router();

Router.use("/workouts", workoutRoutes);
// call Router with the query paths here. 

module.exports = Router;