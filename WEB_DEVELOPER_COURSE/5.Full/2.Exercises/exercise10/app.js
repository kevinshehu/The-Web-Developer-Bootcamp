const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const product = form.elements.product.value;
    const quantity = form.elements.qty.value;

    addList(product, quantity);

    form.elements.product.value = '';
    form.elements.qty.value = '';
})

function addList(product, quantity) {
    const newList = document.createElement('li');
    newList.append(`${quantity} ${product}`);
    ul.append(newList);
}