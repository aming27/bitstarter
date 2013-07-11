var express = require('express');
var app = express.createServer(express.logger());
var fs = require ('fs');
  function message(){
      var buffer = new Buffer(fs.readFileSync("index.html"));
      return (buffer.toString('utf-8');
  }
  
  app.get('/', function(request, response) {
  response.send(message());
  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


