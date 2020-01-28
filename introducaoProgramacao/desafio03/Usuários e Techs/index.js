//Usuários e tecnologias

/* Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js

*/

const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]


//Percorra a lista de usuários com uma estrutura de repetição imprimindo em 
//tela as informações dos usuários:


for (let usuario of usuarios){
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}


function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false

  for (let tecnologia of usuario.tecnologias){
    if(tecnologia == 'CSS'){
      return true;
    }
  }
  return false ;
}



for (let usuario of usuarios){
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);

  if(usuarioTrabalhaComCSS){
    console.log(`O usuário ${usuario.nome} trabalha com CSS`)
  }
}