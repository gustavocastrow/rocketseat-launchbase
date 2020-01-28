const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('views', {
  express: server
})

server.get('/', function(req, res){
  return res.render('about')

})

server.get('/portfolio', function(req, res){

  return res.render('portfolio', {items: videos})
})

server.listen(5000, function(){
  console.log('Server is running!')
})