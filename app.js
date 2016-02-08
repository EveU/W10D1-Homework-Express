var express = require('express');
var app = express();
var port = '3000';

var films = require('./models/films.js');
var disneyRouter = require('./controllers/disneyRouter');

var expressLayouts = require('express-ejs-layouts');

// Application Settings
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use('/films', disneyRouter);

app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res){
  // res.send('Disney films');
  res.render('index', {title: 'Disney Films'});
});

app.listen(port, function(){
  console.log('running on port', port);
});