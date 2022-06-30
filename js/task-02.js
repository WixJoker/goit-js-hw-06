const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('ul');

const newArrIngredients = ingredients.map(ingredient => {
  const ingredientEl = document.createElement(li);
  ingredientEl.textContent = ingredients.indexOf(ingredient);
  ingredientEl.classList.add('item');

  return ingredientEl;
});

ingredientRef.append(...newArrIngredients);
