function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color');

const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanColor.textContent = 
});