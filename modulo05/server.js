const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./public');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express:server,
  autoescape: false,
  noCache: true
})


server.listen(4000, function(){
  console.log('Server is running')
})