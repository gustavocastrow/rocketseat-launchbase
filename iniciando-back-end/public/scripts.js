const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function(){
    const video_id = card.getAttribute("id")
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_id}`;
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove('active'); 
  modalOverlay.querySelector("iframe").src = "" //Removendo o iframe ao clicar no X
})

// Video iframe

//O modal estao dentro do iframe, por isso estou reutilizando a variavel
//nao precisando colocar ela em uma variavel do zero
