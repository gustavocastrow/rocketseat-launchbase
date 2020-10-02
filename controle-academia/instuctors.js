const fs = require('fs')
const data = require("./data.json")

// SHOW
exports.show = function(req, res) {
  //req.query.id = ?id=1
  //req.body = recebe do formulario atraves do post
  //req.params = recebe diretamente da url (/:id)
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor){
    return instructor.id == id
  })

  if (!foundInstructor) return res.send("Instructor not found!")

  const instructor = {
    ...foundInstructor,
    age: "",
    services: foundInstructor.services.split(","), 
    created_at: "",
  }

  return res.render("instructors/show", { instructor });


}
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

  let {avatar_url, birth, name, services, gender} = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)

  

  // [ ] .. push -> [{...}] -> [{...}, {...}]
  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at,
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")

    return res.redirect("/instructors")
  })
  //return res.send(req.body)
}
