const numberOfCategories = document.querySelectorAll('.item').length;

const categoryNames = document.querySelectorAll('h2');
console.log(categoryNames);
const x = categoryNames => {
  return categoryNames.map(categoryName => categoryName.textContent);
};
console.log(`Number of categories: `, numberOfCategories);
console.log(`Category: `, x);

const elementsInCategory = document.querySelectorAll('.item li').length;

console.log(`Elements: `, elementsInCategory);
