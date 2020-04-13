const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card');
//Ativando o modal.
for(let card of cards){
  card.addEventListener("click", function(){
    const videoId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src=`https://youtube.com/embed/${videoId}`;
  });
}
//Fechando o modal.
document.querySelector('.close-modal').
  addEventListener("click", function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src="";
  })

