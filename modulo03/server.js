const express = require('express')
const server = express();

server.get("/", function(request, response){
  return response.json({ message: "Ola"})
})

server.listen(3333, function(){
  console.log("Server is running");
});

