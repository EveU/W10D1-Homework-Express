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

// CREATE
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

// EDIT
disneyRouter.get('/:id/edit', function(req, res){
  res.render('films/edit', {film: films[req.params.id], filmId: req.params.id});
});

// UPDATE
disneyRouter.post('/:id', function(req, res){
  var film = films[req.params.id];
  film.title = req.body.title || film.title;
  film.year = parseInt(req.body.year) || film.year;
  film.runTime = parseInt(req.body.runTime) || film.runTime;
  films[req.params.id] = film;
  res.redirect('/');
});


module.exports = disneyRouter;