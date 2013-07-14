var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(50);
buffer = fs.readFileSync('index.html');

var indexHTML = buffer.toString();

app.get('/', function(request, response) {
  response.send(indexHTML);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
