const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const liElem = document.createElement("li");
  liElem.textContent = ingredients[i];
  liElem.classList.add("item");
  list.append(liElem);
};

console.log(list);