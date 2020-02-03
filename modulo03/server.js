const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view engine', 'html');

nunjucks.configure('views', {
  express:server
})

server.get('/', function(req, res){
  return res.render('index');

})

server.listen(4000, function(){
  console.log('Server is running')
})