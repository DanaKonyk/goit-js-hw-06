const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');




const addIngridients = ingredients => {
  return ingredients.map(ingredient => {
    const itemEL = document.createElement('li');
    
    itemEL.textContent = ingredient;
    itemEL.classList.add('ingredient-item');

    return itemEL;
    
  });
};


const items = addIngridients(ingredients);
ingredientsList.append(...items);

console.log(ingredientsList);



