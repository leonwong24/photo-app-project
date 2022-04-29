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


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    userLikes: [imageSchema],

    userLikesId: [String]
});



mongoose.model('User', userSchema);