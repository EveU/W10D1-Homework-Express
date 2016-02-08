var express = require('express');
var disneyRouter = express.Router();
var films = require('../models/films.js');
var bodyParser = require('body-parser');

disneyRouter.use(bodyParser.urlencoded({extended: false}));

// INDEX
disneyRouter.get('/', function(req, res){
  res.render('films/index', {films: films});
});

// NEW
disneyRouter.get('/new', function(req, res){
  res.render('films/new');
});

//CREATE
disneyRouter.post('/', function(req, res){
  var newFilm = {}
  newFilm.title = req.body.title;
  newFilm.year = parseInt(req.body.year);
  newFilm.runTime = parseInt(req.body.runTime);
  films.unshift(newFilm);
  res.redirect('/');
});

// SHOW
disneyRouter.get('/:id', function(req, res){
  res.render('films/show', {film: films[req.params.id], filmId: req.params.id});
});

module.exports = disneyRouter;