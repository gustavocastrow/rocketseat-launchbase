const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em 
//tela as informações dos usuários:


for(let usuario of usuarios){
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}

//Busca por tecnologia 

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
  for (let tecnlogia of usuario.tecnologias) {
    if (tecnlogia == "CSS") {
      return true
    }
  }
  return false
}

//Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída 
//acima, se SIM, imprima em tela as informações do usuário:

// for (let i = 0; i < usuarios.length; i++) {
//   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

//   if(usuarioTrabalhaComCSS) {
//     console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
//   }
// }

for(let usuario of usuarios){
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario)

  if(usuarioTrabalhaComCSS){
    console.log(`O usuário ${usuario.nome} trabalha com CSS`)

  }
}