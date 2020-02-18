const fs = require('fs')
const data = require('./data.json')


// show

exports.show = function(req, res){
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher){
    return teacher.id == id
  })

  if(!foundTeacher) return res.send('Teacher not found!')

  return res.render('teachers/show', { teacher: foundTeacher });
  
}

// create
exports.post = function(req, res){

  const keys = Object.keys(req.body)

  for (key of keys){
    if (req.body[key] == ""){
      return res.send('Please, fill al fields')
    }
  }

  let { avatar_url, name, birth, scholarity, tipo, services, } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    

    data.teachers.push({
      id,
      avatar_url, 
      name, 
      birth, 
      scholarity, 
      tipo, 
      services, 
      created_at
    })

   fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
     if (err) return res.send('Write file error!')

     return res.redirect('/teachers')

   })
    //return res.send(req.body)
}

// updtate

// delete


