const mongoose = require("mongoose");

const homeImagesSchema = new mongoose.Schema({
    image: [String],  // Store an array of image filenames
});

const HomeImages = mongoose.model("HomeImages", homeImagesSchema);

module.exports = HomeImages;
