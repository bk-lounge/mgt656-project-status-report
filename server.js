var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendFile('report.html');
});

app.listen(process.env.PORT || 4000);