const usuarios = [
  { nome: 'Carlos', techs: ['HTML', 'CSS'] },
  { nome: 'Jasmine', techs: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', techs: ['HTML', 'Node.js'] }
]

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em 
//tela as informações dos usuários:

for(let usuario of usuarios){
  //console.log(usuario);
  console.log(`O usuário ${usuario.nome} trabalha com ${usuario.techs}`)
}


function checaSeUsuarioUsaCSS (usuario) {
  //// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false

  for(let tech of usuario.techs){
    if (tech == "CSS"){
      return true
    }
    
  }
  return false

}

for(let usuario of usuarios){
  const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuario)
  if(usuarioTrabalhaComCss){
    console.log(`O usuario ${usuario.nome} trabalha com CSS`)
  }
}