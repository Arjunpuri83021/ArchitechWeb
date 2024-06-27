const mongoose = require('mongoose');

const RegisteredUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobnumber: Number,
  resume:String,
  message:String,
  profileImage: String,
});

module.exports = mongoose.model('Registeruser', RegisteredUserSchema);