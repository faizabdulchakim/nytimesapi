var express		= require('express');
var router		= express.Router();

router.get('/api/:phrase/:order/:page', function(req, res){
	var phrase	= req.params.phrase;
	var order	= req.params.order;
	var page 	= req.params.page;
	var api_key	= "h2PhtyLa0ScGTMGtH8K9GGQTJlGR0wup";
	var filter	= "";
	var fb = [];
	filter		= filter + "&q="+phrase;
	if(order=="oldest"||order=="newest"){
		filter = filter + "&sort=" + order;
	}
	filter 		= filter + "&page="+page; 
	var url		= "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20201201&end_date=20201219"+filter+"&api-key="+api_key;
	req.app.get('axios').get(url)
	.then(function (response) {
		var index = 0;
		if(response.data.response.status!="ERROR"){
			for(x=0;x<response.data.response.docs.length;x++){
				let img		 = "";
				let headline = "";
				let abstract_= "";
				let content	 = "";
				let pub_date = "";
				
				if(response.data.response.docs.length>0){
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
					
					fb[index]={};
					fb[index].id=index;
					fb[index].title=headline;
					fb[index].abstract=abstract_;
					if(img!=""){
						fb[index].img=img;
					}else{
						fb[index].img="";
					}
					fb[index].content=content;
					fb[index].pub_date=pub_date;
					index++;
				}
			}
		}
		res.send(JSON.stringify(fb));
	})
	.catch(function (error) {
		res.send(JSON.stringify(fb));
	})
});

router.get('/api/*', function(req, res) {
  res.send("WELCOME TO API");
});

module.exports = router;
