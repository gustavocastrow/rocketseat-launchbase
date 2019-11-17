/* Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), cada usuário tem 
um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]
Percorra a lista de usuários com uma estrutura de repetição imprimimndo em tela 
as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js

*/

//Crie um programa que armazena um array de usuários (objetos), cada usuário tem 
//um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: 'Carlos', 
    tecnologias: ['HTML', 'CSS'] 
  },
  { nome: 'Jasmine',
    tecnologias: ['JavaScript', 'CSS']
  },
  { nome: 'Tuane',
    tecnologias: ['HTML', 'Node.js'] 
  }
];
 
//Percorra a lista de usuários com uma estrutura de repetição imprimimndo em tela 
//as informações dos usuários:

for (let i = 0; i <usuarios.length; i++){
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

//Crie uma função que recebe os dados de um objeto de usuário e retorna SE o 
//usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

function checkCSS(usuario) {
  for (let i = 0; i<usuario.tecnologias.length; i++) {
    if(usuario.tecnologias[i] == 'CSS'){
      return true
    }
  }
  return false 
  }
  
  //Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha 
  //com CSS utilizando a função construída acima, se SIM, imprima em tela as 
  //informações do usuário:
  for (let i = 0; i <usuarios.length; i++) {
    const usuarioTrabalhoComCSS = checkCSS(usuarios[i])
    if(usuarioTrabalhoComCSS) {
      console.log(`O usuario ${usuarios[i].nome} trabalhar com css`)

    }
  }

