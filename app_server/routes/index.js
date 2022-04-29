const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main'); 
const ctrlUser= require('../controllers/users'); 
const ctrlImage = require('../controllers/images'); 
/* GET home page. */
router.get('/', ctrlMain.index); 

/*GET user page. */
router.get('/register', ctrlUser.userRegistration); 
router.get('/login', ctrlUser.userLogin); 
router.get('/user',ctrlUser.userLikes);

/*GET Search Image result page. */
router.get('/search', ctrlImage.searchImage); 

/*GET Pop Up image page. */
//router.get('/image', ctrlImage.selectImage);



module.exports = router;

