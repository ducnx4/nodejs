var express = require('express');
var app = express()

app.get('/', function(re,res) {
  res.send('Hello ducnx4 ')
});

var port = process.argv[2] || 3000;

app.listen(port);
console.log('app listening on port' + port)