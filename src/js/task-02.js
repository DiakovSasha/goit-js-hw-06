const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngridients = document.querySelector("#ingredients");

const sortItems = ingredients.map((el) => {
  const addIgredientsItem = document.createElement("li");
  addIgredientsItem.classList.add("item");
  addIgredientsItem.textContent = el;
  return addIgredientsItem;
});
// console.log(sortItems);
allIngridients.append(...sortItems);
console.log(allIngridients);
