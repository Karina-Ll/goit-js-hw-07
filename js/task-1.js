const liItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItem.length}`);

for (let i = 0; i < liItem.length; i += 1) {
  console.log(`Category: ${liItem[i].firstElementChild.textContent}`);
  console.log(`Elements: ${liItem[i].lastElementChild.children.length}`);
}