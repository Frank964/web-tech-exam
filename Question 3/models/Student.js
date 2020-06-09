var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  contactNumber: Number
});

module.exports = mongoose.model('Student', StudentSchema);
