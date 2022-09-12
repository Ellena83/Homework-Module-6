const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientListRef = document.querySelector('#ingredients');
// console.log(ingredient)

const ingred = ingredients.map(ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.classList.add('item');
  ingredientItemRef.textContent = ingredient;
  return ingredientItemRef;
})

ingredientListRef.append(...ingred);
console.log(ingredientListRef);