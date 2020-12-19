var express			= require('express');
var step1			= require('./processor/step1.js');
const axios 		= require('axios');

var app				= express();

//app.use(step1);

app.get('/', function(req, res){
	axios.get('http://localhost:80/api/step1.php')
	.then(function (response) {
		console.log(response.data)
	})
	.catch(function (error) {
		console.log(error)
	})
	.then(function(){
		res.send("hola");
	});
});

/*

*/


app.listen(3000,function(){console.log("API SERVER START!")});
//app.listen(process.env.PORT,function(){console.log("API SERVER START!")});
