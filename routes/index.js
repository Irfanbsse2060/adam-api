var express = require('express');
var router = express.Router();

// router.get('/', function(req, res) {
//   res.jsonp({message:'Welcome to api.easyapi.dev'});
// });

router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});
module.exports = router;
