var express = require('express');

var app = express();

app.use('/files', express.static(__dirname + '/src'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(8888, function(){
	console.log("Listening on port " + this.address().port)
});