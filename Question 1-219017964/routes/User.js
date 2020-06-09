// Create Database Schema and model for users
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   
    name: { type: String, required: true },
    dob: { type: String },
    address: { type: String },
    contact: {type: Number},
    emergencycontact:{type: Number} 
});

// Model for the schema
const user = mongoose.model('User', UserSchema);

module.exports = user;