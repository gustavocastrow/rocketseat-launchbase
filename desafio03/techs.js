// Desafio 01: Usuários e tecnologias
const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
}
// Desafio 02

function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia === 'CSS') return true
  }
  return false
}

for (let usuario of usuarios) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuario ${usuario.nome} trabalha com CSS`)
  }
}

