var express = require('express');
var app = express();
var port = '3000';

app.get('/', function(req, res){
  res.send('Disney films');
});

app.listen(port, function(){
  console.log('running on port', port);
});