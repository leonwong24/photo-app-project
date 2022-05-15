const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main'); 
const ctrlUser= require('../controllers/users'); 
const ctrlImage = require('../controllers/images'); 

// search images
router
    .route('/search/:query')
    .get(ctrlImage.imagesSearch)
    .patch(ctrlImage.imagesUserLikeAction)
    .post(ctrlImage.imagesUserDislikeAction)

// user register
router
    .route('/register')
    .post(ctrlUser.usersRegister)

// users
router
    .route('/users/:userid')
    .get(ctrlImage.imagesUserLiked)
    .patch(ctrlUser.usersUpdate)

router
    .route('/')
    .get(ctrlMain.listImages)
    .patch(ctrlImage.imagesUserLikeAction)
    .post(ctrlImage.imagesUserDislikeAction)


module.exports = router;
