const fontSizeControl = document.querySelector('input#font-size-control');
const enteredText = document.querySelector('span#text');

fontSizeControl.addEventListener('input', handleInputRange);
function handleInputRange(event) {
  enteredText.style.fontSize = event.currentTarget.value + 'px';
}
