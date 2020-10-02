// Arquivo apenas para esboçar a lógica de datas.

// dia: 01 - 12 = -11
// dia: 13 - 12 = 1
// dia: 12 - 12 = 0


function age(timestamp) {
  const today = new Date()
  const birthDate = new Date(timestamp)

  //getDay -> dias da semana
  //getDate -> dia do mes (1-31)

  
  

  // ano: 2019 - 1985 = 35
  let age = today.getFullYear() - birthDate.getFullYear() // 35
  const month = today.getMonth() - birthDate.getMonth()

  // mes: 11 - 12 = -1
  // mes: 11 - 11 = 0
  // mes: 11 - 10 +1
  if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()){ // se mes == 0, eu estou no mes do meu aniversario 
    age = age - 1
  }

  return age
}
