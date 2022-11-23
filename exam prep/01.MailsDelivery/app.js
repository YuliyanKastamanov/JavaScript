window.addEventListener('load', solve);

function solve() {


    let recipientNameElement = document.querySelector("#recipientName")
    let titleElement = document.getElementById("title")
    let messageElement = document.getElementById("message")





    let addBtnElement = document.getElementById('add')
    let resetBtnElement = document.getElementById('reset');

    let mailsListElement = document.getElementById('list');
    let sentMailsElement = document.querySelector('.sent-list');
    let deletedMailsElement = document.querySelector('.delete-list');

    addBtnElement.addEventListener('click', addMails);


    function addMails(e) {
        e.preventDefault()



        let recipientName = recipientNameElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        if (recipientName == "" || title == "" || message == ""){
            return
        }

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

        let mailsLiElement = document.createElement('li')


        let h4TitleElement = document.createElement('h4');
        h4TitleElement.textContent = `Title: ${title}`;

        let h4NameElement = document.createElement('h4');
        h4NameElement.textContent = `Recipient Name: ${recipientName}`;

        let spanMessageElement = document.createElement('span');
        spanMessageElement.textContent = message;

        let divElement = document.createElement('div');
        divElement.setAttribute('id', 'list-action');

        let sendBtnElement = document.createElement('button');
        sendBtnElement.setAttribute('type', 'submit');
        sendBtnElement.setAttribute('id', 'send');
        sendBtnElement.textContent = 'Send';


        let deleteBtnElement = document.createElement('button');
        deleteBtnElement.setAttribute('type', 'submit');
        deleteBtnElement.setAttribute('id', 'delete');
        deleteBtnElement.textContent = 'Delete';

        divElement.appendChild(sendBtnElement);
        divElement.appendChild(deleteBtnElement);


        mailsLiElement.appendChild(h4TitleElement);
        mailsLiElement.appendChild(h4NameElement);
        mailsLiElement.appendChild(spanMessageElement);
        mailsLiElement.appendChild(divElement);
        mailsListElement.appendChild(mailsLiElement);

        deleteBtnElement.addEventListener('click', deleteMail);
        
        
        sendBtnElement.addEventListener('click', () =>{
            mailsLiElement.remove();



            let sentMailLiElement = document.createElement('li');
            let sentMailSpanToElement = document.createElement('span');
            sentMailSpanToElement.textContent = `To: ${recipientName}`

            let sentMailSpanTitleElement = document.createElement('span');
            sentMailSpanTitleElement.textContent = `Title: ${title}`;

            let sentMailDivElement = document.createElement('div');
            sentMailDivElement.classList.add('btn')

            let sentMailDeleteBtnElement = document.createElement('button');
            sentMailDeleteBtnElement.classList.add('delete');
            sentMailDeleteBtnElement.setAttribute('type', 'submit');
            sentMailDeleteBtnElement.textContent = 'Delete';

            sentMailDivElement.appendChild(sentMailDeleteBtnElement);

            sentMailLiElement.appendChild(sentMailSpanToElement);
            sentMailLiElement.appendChild(sentMailSpanTitleElement);
            sentMailLiElement.appendChild(sentMailDivElement);

            sentMailsElement.appendChild(sentMailLiElement); 

            sentMailDeleteBtnElement.addEventListener('click', () =>{

                sentMailLiElement.remove();

                let deleteMailLiElement = document.createElement('li');
                let deleteMailSpanToElement = document.createElement('span');
                deleteMailSpanToElement.textContent = `To: ${recipientName}`

                let deleteMailSpanTitleElement = document.createElement('span');
                deleteMailSpanTitleElement.textContent = `Title: ${title}`;

                deleteMailLiElement.appendChild(deleteMailSpanToElement);
                deleteMailLiElement.appendChild(deleteMailSpanTitleElement);

                deletedMailsElement.appendChild(deleteMailLiElement);
            });

            
        });

        function deleteMail(e){

            
                   
                       
            mailsLiElement.remove();

            let deleteMailLiElement = document.createElement('li');
            let deleteMailSpanToElement = document.createElement('span');
            deleteMailSpanToElement.textContent = `To: ${recipientName}`

            let deleteMailSpanTitleElement = document.createElement('span');
            deleteMailSpanTitleElement.textContent = `Title: ${title}`;

            deleteMailLiElement.appendChild(deleteMailSpanToElement);
            deleteMailLiElement.appendChild(deleteMailSpanTitleElement);

            deletedMailsElement.appendChild(deleteMailLiElement);


        }


    }


    resetBtnElement.addEventListener('click', (e) => {

        e.preventDefault();
        

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

    })



}


