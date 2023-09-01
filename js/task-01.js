const itemEL = document.querySelectorAll('.item');
console.log('Number of categories:', itemEL.length);

Array.from(itemEL).forEach(item => {
 
    const titleEL = item.firstElementChild;
    console.log('Category:', titleEL.textContent); 
    const itemList = item.lastElementChild;
    console.log('Elements:', itemList.children.length);

});

