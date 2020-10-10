const express = require('express');
const db = require("../models");
const workoutSeed = require("../seeders/seed");
const router = express.Router();

router.get('/seeds', (req, res) => {
    console.log(workoutSeed);
    db.Workout.deleteMany({})
      .then(() => db.Workout.collection.insertMany(workoutSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
})




module.exports = router;