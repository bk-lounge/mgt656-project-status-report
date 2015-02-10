var express = require('express');
var app = express();
var contextData = {};

app.get('/', function(request, response){
    response.render('report.html', contextData);
});

app.listen(process.env.PORT || 4000);