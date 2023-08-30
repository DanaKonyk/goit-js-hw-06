const listEL = document.querySelector('#categories');
const itemEL = listEL.children;


const itemTotal = itemEL.length;
console.log('Number of categories:', itemTotal);

Array.from(itemEL).forEach(item => {
 
    const titleEL = item.children;
    console.log('Category:', titleEL[0].textContent); 
    const itemList = item.lastElementChild;
    const itemListEl = itemList.children.length;
    console.log('Elements:', itemListEl);
});