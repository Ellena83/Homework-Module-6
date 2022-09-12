
const listItem = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${listItem}`);

const titleEl = document.querySelectorAll('.item h2');

titleEl.forEach((elem) => {
    console.log(`Category: ${elem.textContent}`)
    console.log(`Elements: ${elem.nextElementSibling.children.length}`)
});
