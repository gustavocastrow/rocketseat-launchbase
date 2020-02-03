const express = require('express');
const server = express();

server.get('/', function(req, res){
  return res.send('Hello Launchbase!')

})

server.listen(4000, function(){
  console.log('Server is running')
})