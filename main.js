var express		= require('express');
var api			= require('./processor/api.js');
var frontend	= require('./processor/frontend.js');
const axios		= require('axios');

var app			= express();

app.set('axios',axios);
app.use(api);
app.use(frontend);




/*
app.get('/', function(req, res){
	axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20201201&end_date=20201201&q=election&api-key=h2PhtyLa0ScGTMGtH8K9GGQTJlGR0wup')
	.then(function (response) {
		console.log(response.data.response.docs[0].headline.main)
		console.log(response.data.response.docs[0].abstract);
		console.log("https://static01.nyt.com/"+response.data.response.docs[0].multimedia[0].url);
		console.log(response.data.response.docs[0].lead_paragraph);
		
		
		
	})
	.catch(function (error) {
		console.log(error)
	})
	.then(function(){
		res.send("hola");
	});
});
*/

/*

*/


app.listen(3000,function(){console.log("API SERVER START!")});
//app.listen(process.env.PORT,function(){console.log("API SERVER START!")});
