// Require Mongoose
const mongoose = require('mongoose');
//Create Schema class
const Schema = mongoose.Schema;

// Create Stats schema
let StatsSchema = new Schema({
    dob: {
        type: String
    },
    weight: {
    }
})