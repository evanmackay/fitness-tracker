const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for your exercise"
    },
    type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise this is"
    },
    weight: {
        type: Number,
        trim: true,
        required: "Enter the weight if applicable"
    },
    sets: {
        type: Number,
        trim: true,
        required: "Enter how many sets of this workout will be completed"
    },
    repetitions: {
        type: String,
        trim: true,
        required: "Enter the amount of repitions you would like to complete"
    },
    duration: {
        type: Number,
        trim: true,
        required: "How long will this workout last"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;