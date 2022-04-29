var express = require('express');
var router = express.Router();
const ctrlImage = require('../controllers/images'); 

/* GET image listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET Search Image result page. */
router.get('/search', ctrlImage.searchImage); 

module.exports = router;
