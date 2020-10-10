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

router.get('', (req, res) => {
    db.Workout.find({}).then((workouts) => {
        res.json(workouts);
    }).catch((err) => {
        console.log(err);
    })
});
router.get('/range', (req, res) => {
    console.log('this is the range request');
    db.Workout.find({}).then((workouts) => {
        res.json(workouts);
    }).catch((err) => {
        console.log(err);
    })
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const newExercise = req.body;
    console.log(newExercise);
    await db.Workout.findOneAndUpdate({'_id': id}, {'$addToSet': {'exercises': newExercise}}).catch((err) => {console.log(err)});
    res.json('Completed.');
    
    
});


router.post('', (req, res) => {
    console.log(req.body);
    db.Workout.find({}).then((workouts) => {
        res.json(workouts);
    }).catch((err) => {
        console.log(err);
    })
});


module.exports = router;