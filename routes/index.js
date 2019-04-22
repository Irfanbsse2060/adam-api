var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.jsonp({message:'Welcome to API'});
});

module.exports = router;
