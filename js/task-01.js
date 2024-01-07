const categoriesItemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemsByClass.length}`);
console.log("");

categoriesItemsByClass.forEach(({children: [h2, ul]}) => {
    console.log(`Category: ${h2.textContent}`);
    console.log(`Elements: ${ul.childElementCount}`);
    console.log("");
  });
  
