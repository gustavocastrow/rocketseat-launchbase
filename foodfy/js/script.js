const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function () {
    const srcImg = card.querySelector('img').getAttribute('src')
    const cardTtitle = card.querySelector('.card__title p').textContent
    const cardAuthor = card.querySelector('.card__author p').textContent
    modalOverlay.classList.add('active')

    modalOverlay.querySelector('img').src = `${srcImg}`
    modalOverlay.querySelector('.card__title p').textContent = `${cardTtitle}`
    modalOverlay.querySelector('.card__author p').textContent = `${cardAuthor}`
  })
}

document.querySelector('.close').addEventListener('click', function () {
  modalOverlay.classList.remove('active')
})