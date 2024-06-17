const mongoose = require('mongoose');

const contactQuerySchema = new mongoose.Schema({
  name:String,
  email:String,
  subject:String,
  query:String
});

module.exports = mongoose.model('ContactQuery', contactQuerySchema);
