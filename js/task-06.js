const inputData = document.querySelector('#validation-input');

inputData.addEventListener('blur', () => {
  if (inputData.value.trim().length === Number(inputData.getAttribute('data-length'))) {
    inputData.classList.add('valid');
    inputData.classList.remove('invalid');
  } else {
    inputData.classList.add('invalid');
    inputData.classList.remove('valid');
  }
});
