const mongoose = require('mongoose');

const architectSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    image: [String],
    Address: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    Area: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('architectlists', architectSchema);
