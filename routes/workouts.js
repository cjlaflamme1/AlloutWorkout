const express = require('express');
const db = require("../models");
const router = express.Router();

router.get('', (req, res) => {
    db.Workout.find({}).then((workouts) => {
        res.json(workouts);
    }).catch((err) => {
        console.log(err);
    })
});
router.get('/range', (req, res) => {
    db.Workout.find({}).then((workouts) => {
        res.json(workouts);
    }).catch((err) => {
        console.log(err);
    })
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const newExercise = req.body;
    if(id !== "undefined"){
        await db.Workout.findOneAndUpdate({'_id': id}, {'$addToSet': {'exercises': newExercise}}).catch((err) => {console.log(err)});
    } else {
        await db.Workout.create({'exercises': newExercise}).catch((err) => {console.log(err)});
    }
    res.json('Completed.');
    
    
});


router.post('', (req, res) => {
    db.Workout.find({}).then((workouts) => {
        res.json(workouts);
    }).catch((err) => {
        console.log(err);
    })
});


module.exports = router;