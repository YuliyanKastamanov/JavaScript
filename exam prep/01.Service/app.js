window.addEventListener('load', solve);

function solve() {

let sendButtonElement = document.querySelector('#right form button');
sendButtonElement.addEventListener('click', sendInfo);

let productTypeSelectElement = document.querySelector('#type-product');
let descriptionTextAreaElement = document.querySelector('#description');
let clientNameElement = document.querySelector('#client-name');
let clientPhoneElement = document.querySelector('#client-phone');

let receivedOrdersSectionElement = document.querySelector('#received-orders');
let completedOrdersSectionElement = document.querySelector('#completed-orders');

let clearButtonElement = document.querySelector('#completed-orders button');

clearButtonElement.addEventListener('click', clearOrders);



function sendInfo(e){
    e.preventDefault();

    let productType = productTypeSelectElement.value;
    let description = descriptionTextAreaElement.value;
    let clientName = clientNameElement.value;
    let clientPhone = clientPhoneElement.value

    if (description == '', clientName == '' || clientPhone == ''){
        return;
    }

    productTypeSelectElement.value = '';
    descriptionTextAreaElement.value = '';
    clientNameElement.value = '';
    clientPhoneElement.value = '';

    let containerDivElement = document.createElement('div');
    containerDivElement.classList.add('container');

    let h2Element = document.createElement('h2');
    h2Element.textContent = `Product type for repair: ${productType}`;

    let h3Element = document.createElement('h3');
    h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`;

    let h4Element = document.createElement('h4');
    h4Element.textContent = `Description of the problem: ${description}`;

    let startButton = document.createElement('button');
    startButton.classList.add('start-btn');
    startButton.textContent = 'Start repair';

    let finishButton = document.createElement('button');
    finishButton.classList.add('finish-btn');
    finishButton.textContent = 'Finish repair';
    finishButton.disabled = true;

    startButton.addEventListener('click', startRepair);
    finishButton.addEventListener('click', finishRepair);

    containerDivElement.appendChild(h2Element);
    containerDivElement.appendChild(h3Element)
    containerDivElement.appendChild(h4Element)
    containerDivElement.appendChild(startButton)
    containerDivElement.appendChild(finishButton)

    receivedOrdersSectionElement.appendChild(containerDivElement);




}

function startRepair(e) {
    // правим start-btn disabled
    e.currentTarget.disabled = true;

    //правим finish-btn enable
    e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
};
function finishRepair(e) {

    //вземаме си контейнера
    let containerDiv = e.currentTarget.parentNode;


    // изтриваме и двата бутона след като е кликнат finish-btn
    e.currentTarget.remove();
    containerDiv.querySelector('.start-btn').remove();

    containerDiv.remove();
    completedOrdersSectionElement.appendChild(containerDiv);
};

function clearOrders(e){

    let allContainers =  Array.from(e.currentTarget.parentNode.querySelectorAll('.container'));

    for (const container of allContainers) {

        container.remove();
        
    }

}
    
}