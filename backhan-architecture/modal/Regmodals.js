const mongoose = require('mongoose');

const architectSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    image: [String],
    address: {
        type: String,
       
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    area: {
        type: String,
        
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('architectlists', architectSchema);
