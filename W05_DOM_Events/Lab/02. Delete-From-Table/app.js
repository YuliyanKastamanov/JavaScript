function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value; 

    const rows = Array.from(document.querySelectorAll('tbody tr'));

    let found = false;

    for (let row of rows){

        const currentEmail = row.children[1].textContent;

        if(currentEmail == input){

            const parent = row.parentElement;
            parent.removeChild(row);
            found = true;

        }




    }

    if(found){
        document.getElementById('result').textContent = 'Deleted.'

    } else{
        document.getElementById('result').textContent = 'Not found.'
    }



}