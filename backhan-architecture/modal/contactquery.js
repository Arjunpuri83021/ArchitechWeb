const mongoose = require('mongoose');

const contactQuerySchema = new mongoose.Schema({
  name:String,
  email:String,
  query:String, 
  status:String
});

module.exports = mongoose.model('ContactQuery', contactQuerySchema);
