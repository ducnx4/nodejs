var express = require('express');
var app = express()

app.get('/', function(re,res) {
  res.send('Hello ducnx4 abc')
});

var port = process.argv[2] || 80;

app.listen(port);
console.log('app listening on port' + port)