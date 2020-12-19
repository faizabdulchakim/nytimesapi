var express		= require('express');
var api			= require('./processor/api.js');
var frontend	= require('./processor/frontend.js');
const axios		= require('axios');
var app			= express();

app.set('axios',axios);
app.use(api);
app.use(frontend);

app.listen(80,function(){console.log("API SERVER START!")});
//app.listen(process.env.PORT,function(){console.log("API SERVER START!")});
