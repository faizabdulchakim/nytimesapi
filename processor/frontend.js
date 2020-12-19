var express		= require('express');
var router		= express.Router();

router.get('/frontend', function(req, res){
	res.send("WELCOME TO DUITKU frontend");
});

module.exports = router;
