// User model to store information about our users

// Require Mongoose
const mongoose = require('mongoose');
// Create Schema class
const Schema = mongoose.Schema;

// Create User Schema
let UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    stats: [{
        type: Schema.Types.ObjectId,
        ref: "Stats"
    }],
    signUpDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Create User model with UserSchema
var User = mongoose.model("User", UserSchema);

// Export Model
module.exports = User;