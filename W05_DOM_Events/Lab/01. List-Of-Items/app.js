function addItem() {
    
    const content = document.getElementById('newItemText').value;

    const liElement = document.createElement('li');
    liElement.textContent = content;

    document.getElementById('items').appendChild(liElement);

    document.getElementById('newItemText').value = '';

}