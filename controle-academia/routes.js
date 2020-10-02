const express = require('express')
const routes = express.Router()
const instructors = require('./instuctors')

routes.get('/', function(req, res){
  return res.redirect("instructors")
});

routes.get('/instructors', function(req, res){
  return res.render("instructors/index")
});

routes.get('/instructors/create', function(req, res) {
  return res.render("instructors/create")
});

routes.get('/instructors/:id', instructors.show)

routes.post('/instructors', instructors.post)

routes.get('/members', function(req, res){
  return res.send("members")
});


module.exports = routes 