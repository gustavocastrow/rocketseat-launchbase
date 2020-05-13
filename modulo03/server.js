const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
});

server.get("/", function(req, res){
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
    name: "Rocketseat",
    role: "A menor distancia entre você e seus objetivos",
    description: "Transforme sua carreira e seja um programador desejado no mercado, dominando as ferramementas mais modernas de desenvolvimento web e mobile",
    links: [
      {name: "Site", url:"https://rocketseat.com.br/"},
      {name: "Youtube", url:"https://www.youtube.com/rocketseat"},
      {name: "Instagram", url:"https://www.instagram.com/rocketseat_oficial/"}
    ]
    
  }
  return res.render("about", {about});
});

server.get("/portfolio", function(req, res){
  return res.render("portfolio", {items: videos});
});

server.listen(5000, function(){
  console.log("Server is running")
});