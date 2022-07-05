function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const divEl = document.createElement('div');
const divBoxes = document.querySelector('div#boxes');

const inputREf = document.querySelector('[type="number"]');

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  amount = inputREf.value;
}

createButton.addEventListener('click', () => {
  divBoxes.insertAdjacentHTML('afterbegin', '<div></div>')
    = document.div.style.backgroundColor = getRandomHexColor();
});

destroyButton.addEventListener('click', () => {
  divBoxes.remove();
});
