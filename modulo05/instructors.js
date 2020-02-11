const fs = require('fs')
const data = require('./data.json')

// função para create

exports.post = function(req, res){
  
  
    // Validando se todos os dados estão preenchidos.
    const keys = Object.keys(req.body)
  
    for (key of keys) {
      //req.body.key == ""
      if (req.body[key] == ""){
      return res.send('Please, fill all fields ')
        }
    }

    // [ ] 1x
    // [{...}] 2x

    data.instructors.push(req.body) // [{...}]

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
      if(err) return res.send('Write file error')

      return res.redirect('/instructors')

    })
    //return  res.send(req.body)
  
}
