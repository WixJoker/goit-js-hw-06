function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector('div#boxes');

const inputRef = document.querySelector('[type="number"]');

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  amount = inputRef;
}

createButton.addEventListener('click', () => {
  divBoxes.insertAdjacentHTML('afterbegin', `<div></div>`);
});

destroyButton.addEventListener('click', () => {
  divBoxes.remove();
});
