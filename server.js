var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(_dirname + '/dist'));

app.listen(process.env.PORT || 4200 );

app.get('/*', function(req, res){
    res.sendFile(path.join(_dirname + '/dist/index.html'));
})