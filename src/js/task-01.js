const categoriesLists = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesLists.length}`);

const titleElementArr = categoriesLists.forEach((el) => {
  console.log(`Categoriese:${el.firstElementChild.textContent}`);
  console.log(`Elements:${el.lastElementChild.children.length}`);
});
