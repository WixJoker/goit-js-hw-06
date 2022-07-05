function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color');

const createButton = document.querySelector()

const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', () => {
  spanColor.textContent = document.body.style.backgroundColor = getRandomHexColor();
});
