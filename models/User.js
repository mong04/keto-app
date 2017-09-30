// Require Mongoose
const mongoose = require('mongoose');
// Create Schema Class
const Schema = mongoose.Schema;

// Create User Schema
let UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    calories: {
        type: Number,
        default: null
    },
    fat: {
        type: Number,
        default: null
    },
    protein: {
        type: Number,
        default: null
    },
    carbs: {
        type: Number,
        default: null
    }
});

// Create User model with UserSchema
var User = mongoose.model("User", UserSchema);

// Export Model
module.exports = User;