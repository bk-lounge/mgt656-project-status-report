var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/report.html');
});

app.listen(process.env.PORT || 4000);