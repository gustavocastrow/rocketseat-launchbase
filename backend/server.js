const express = require('express');
const server = express();

server.get('/', function(req, res){
  return res.send('Hello Omnistack!')

})

server.listen(5000, function(){
  console.log('Server is running!')
})