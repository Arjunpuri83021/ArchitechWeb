const mongoose = require('mongoose');

const RegisteredUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobnumber: Number,
  resume:String,
  message:String,
  image: String,
});

module.exports = mongoose.model('Registeruser', RegisteredUserSchema);