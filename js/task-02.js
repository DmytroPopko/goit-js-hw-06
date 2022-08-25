function makeIngredientsList() {

  const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

  const listIngredients = document.querySelector('#ingredients');

  const makeListIngredients = options => {
    return options.map(option => {
      const ingredientEl = document.createElement('li');
      ingredientEl.textContent = option;
      ingredientEl.classList.add("item");
      return ingredientEl;
    });
  };

  const elements = makeListIngredients(ingredients);
  listIngredients.append(...elements);

};

makeIngredientsList();
