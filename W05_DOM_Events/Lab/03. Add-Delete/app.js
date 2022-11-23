function addItem() {
    const content = document.getElementById('newItemText').value;

    const liElement = document.createElement('li');
    liElement.textContent = content;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';

    liElement.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete);

    document.getElementById('items').appendChild(liElement);

    document.getElementById('newItemText').value = '';

    
    function onDelete(event){

        event.target.parentElement.remove();
            
    }

}

