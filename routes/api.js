const router = require("express").Router();
const Exercises = require("../models/exercise.js");

router.post("/exercise", ({ body }, res) => {
    Exercises.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/exercise/bulk", ({ body }, res) => {
    Exercises.insertMany(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/exercise", (req, res) => {
    Exercises.find({})
        .sort({ date: -1 })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

module.exports = router