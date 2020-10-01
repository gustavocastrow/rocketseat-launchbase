const fs = require('fs')
const data = require("./data.json")

// CREATE
exports.post = function(req, res) {
  //req.query
  //req.body 
  const keys = Object.keys(req.body) // Retorna um array com as chaves do nosso objeto

  for(key of keys){
        //req.body.key == ""
    if (req.body[key] == ""){//req.body.avatar_url, req.body_name, req.body_birth....
      return res.send("Please, fill all fields!") 
    }
  }

  req.body.birth = Date.parse(req.body.birth)
  req.body.created_at = Date.now()

  // [ ] .. push -> [{...}] -> [{...}, {...}]
  data.instructors.push(req.body)

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")

    return res.redirect("/instructors")
  })
  //return res.send(req.body)
}
