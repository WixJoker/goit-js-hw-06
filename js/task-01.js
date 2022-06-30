const numberOfCategories = document.querySelectorAll('.item').length;

const categoryNames = document.querySelectorAll('h2');

const categoryName = () => {
  return categoryNames.map(item => item.textContent);
};

const elementsInCategory = document.querySelectorAll('.item li').length;

console.log(`Number of categories: `, numberOfCategories);
console.log(`Category: `, categoryName);
// console.log(`Elements: `, elementsInCategory);
