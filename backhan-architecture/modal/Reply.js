const mongoose = require('mongoose');

const adminreplySchema = new mongoose.Schema({
  
  email:String,
  concern:String,
  reply:String
  
});

module.exports = mongoose.model('adminreply', adminreplySchema);
