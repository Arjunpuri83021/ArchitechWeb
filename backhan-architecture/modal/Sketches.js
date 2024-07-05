const mongoose = require('mongoose');

const skechesSchema = new mongoose.Schema({
    image: [String],
});

module.exports = mongoose.model('sketcheslist', skechesSchema);
