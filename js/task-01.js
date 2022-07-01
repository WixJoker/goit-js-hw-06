const numberOfCategories = document.querySelectorAll('.item').length;

const res = document.querySelectorAll('.item');

console.log(`Number of categories: `, numberOfCategories);

res.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`);
});
