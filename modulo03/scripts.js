
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card');

//Ativando o modal.
for(let card of cards){
  card.addEventListener("click", function(){
    modalOverlay.classList.add('active')
  });
}

//Fechando o modal.

document.querySelector('.close-modal').
  addEventListener("click", function(){
    modalOverlay.classList.remove('active');
  })