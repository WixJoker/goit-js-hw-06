const fontSizeControl = document.querySelector('input#font-size-control');
const enteredText = document.querySelector('span#text');

fontSizeControl.addEventListener('input', sliderChange);

function sliderChange() {
  fontSizeControl.innerHTML = enteredText.innerHTML;
}
