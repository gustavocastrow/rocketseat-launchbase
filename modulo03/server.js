const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express:server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res){
  const about = {
    avatar_url: "https://avatars1.githubusercontent.com/u/28705325?s=460&v=4",
    name: "Gustavo Castro",
    role: "Javascript, React e NodeJS",
    description: 'Estudando atualmente: Javascript, NodeJS, React e React Native, através dos bootcamps da Rocketseat(<a href="https://rocketseat.com.br/launchbase" target="_blank">LaunchBase</a> e <a href="https://rocketseat.com.br/gostack" target="_blank">GoStack</a>)',
    links: [
      { name: "Github" , url: "https://github.com/gustavocastrow"},
      { name: "Linkedin" , url: "https://www.linkedin.com/in/gustavocastrow/"},
      { name: "Twitter" , url: "https://twitter.com/gustavocastrojs"}
    ]
  }
  return res.render('about', {about});

})

server.get('/portfolio', function(req, res){
  return res.render('portfolio', { items: videos })
})

server.get('/video', function(req, res){
  const id = req.query.id;

  const video = videos.find(function(video){
    if (video.id == id){
      return true
    }

  })

  if (!video){
    return res.send('Video not found!')
  }
  return res.render('video', { item: video })
})

server.listen(4000, function(){
  console.log('Server is running')
})