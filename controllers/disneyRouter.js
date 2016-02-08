var express = require('express');
var disneyRouter = express.Router();
var films = require('../models/films.js');
var bodyParser = require('body-parser');

disneyRouter.use(bodyParser.urlencoded({extended: false}));

// INDEX
disneyRouter.get('/', function(req, res){
  res.render('films/index', {films: films});
});

// SHOW
disneyRouter.get('/:id', function(req, res){
  res.render('films/show', {film: films[req.params.id], filmId: req.params.id});
});


module.exports = disneyRouter;