const mongoose = require('mongoose');

const RegisteredUserSchema = new mongoose.Schema({
  fname: String,
  email: String,
  mobnumber: Number,
  dob: String,
  address: String,
  profileImage: String,
});

module.exports = mongoose.model('Registeruser', RegisteredUserSchema);