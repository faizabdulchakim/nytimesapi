var express		= require('express');
var router		= express.Router();

router.get('/api/:phrase/:order/', function(req, res){
	var phrase	= req.params.phrase;
	var order	= req.params.order;
	var api_key	= "h2PhtyLa0ScGTMGtH8K9GGQTJlGR0wup";
	var filter	= "";
	filter		= filter + "&q="+phrase;
	if(order=="oldest"||order=="newest"){
		filter = filter + "&sort=" + order;
	}
	var url		= "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20201201&end_date=20201219"+filter+"&api-key="+api_key;
	req.app.get('axios').get(url)
	.then(function (response) {
		
		var fb = "";
		for(x=0;x<response.data.response.docs.length;x++){
			console.log("x="+x);
			let img		 = "";
			let headline = "";
			let abstract_= "";
			let content	 = "";
			let pub_date = "";
			
			
			if(response.data.response.docs[x].headline!==undefined){
				headline = response.data.response.docs[x].headline.main;
			}
			if(response.data.response.docs[x].abstract!==undefined){
				abstract_ = response.data.response.docs[x].abstract;
			}
			if(response.data.response.docs[x].multimedia.length>0){
				img		 = "https://static01.nyt.com/"+response.data.response.docs[x].multimedia[0].url;
			}
			if(response.data.response.docs[x].pub_date!==undefined){
				pub_date = response.data.response.docs[x].pub_date;
			}
			if(response.data.response.docs[x].lead_paragraph!==undefined){
				content	 = response.data.response.docs[x].lead_paragraph;
			}
			
			fb = fb + "<h1>"+headline+"</h1>";
			fb = fb + "<p>"+abstract_+"</p>";
			if(img!=""){
				fb = fb + "<img src='"+img+"' style='width:100px;' />";
			}
			fb = fb + "<p>"+content+"</p>";
			fb = fb + pub_date + "<hr/>";
		}
		res.send(fb);
		
	})
	.catch(function (error) {
		console.log(error)
	})
});

router.get('/api/*', function(req, res) {
  res.send("WELCOME TO API");
});

module.exports = router;
