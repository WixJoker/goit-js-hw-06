const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];

const ingredientsItem = document.createElement('li');
ingredientsItem.classList.add('item');
const ingredient = name => {
  return `<li>${name}</li>`;
};
// const ingredientsList = ingredients.reduce((acc, element) => acc + ingredient(element), '');

const ingredientsList = ingredients.map(element => ingredient(element)).join('');

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.insertAdjacentHTML('afterbegin', ingredientsList);
