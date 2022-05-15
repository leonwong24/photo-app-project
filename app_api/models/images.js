const mongodb = require('mongodb');
const mongoose = require('mongoose');

const exifSchema = new mongoose.Schema({
    make: String,
    model: String,
    name: String,
    exposure_time: String,
    aperture: String,
    focal_length: String,
    iso: Number
})

const imageSchema = new mongoose.Schema({
    imageid: {
        type: String,
        unique: true,
    },
    width: Number,
    height: Number,
    description: String,
    urls: {
        full: String,
        regular: String
    },
    exif: {exifSchema}
});

mongoose.model('Image',imageSchema);

