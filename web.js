var express = require('express');

var app = express.createServer(express.logger());

var buff = fs.readFileSync('index.html');

var stringToSend = buff.toString('utf-8');

app.get('/', function(request, response) {
  response.send(stringToSend);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
