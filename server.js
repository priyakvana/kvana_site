var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/dist'));

var port = app.listen(process.env.PORT || 4200);

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
})

console.log("listen on port");
console.log(path.join(__dirname + '/src/index.html'));