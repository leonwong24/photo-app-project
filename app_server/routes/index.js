const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main'); 
const ctrlUser= require('../controllers/users'); 
/* GET home page. */
router.get('/', ctrlMain.index); 

/*GET user page. */
router.get('/register', ctrlUser.userRegistration); 
router.get('/login', ctrlUser.userLogin); 

module.exports = router;

