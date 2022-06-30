const counterValue = document.querySelector('#value');
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

function func1() {
  let val = Number(counterValue.innerHTML);
  val += 1;
  counterValue.innerHTML = val;
}

function func2() {
  let val = Number(counterValue.innerHTML);
  val -= 1;
  counterValue.innerHTML = val;
}

btnIncrement.addEventListener('click', func1);

btnDecrement.addEventListener('click', func2);
