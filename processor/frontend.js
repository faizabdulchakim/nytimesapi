var express		= require('express');
var router		= express.Router();

router.get('/frontend', function(req, res){
	res.sendFile('frontend.html' , { root : __dirname});
});

router.get('/frontend/*', function(req, res) {
  res.send("keep smile :)");
});

module.exports = router;
