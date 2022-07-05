function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const divEl = document.createElement('div');
const divBoxes = document.querySelector('div#boxes');

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

// function createBoxes(amount) {
//   amount = document.querySelector('[type="number"]');
// }

createButton.addEventListener('click', () => {
  divBoxes.insertAdjacentHTML('afterbegin', '<div></div>');
});

destroyButton.addEventListener('click', () => {
  divBoxes.remove();
});
