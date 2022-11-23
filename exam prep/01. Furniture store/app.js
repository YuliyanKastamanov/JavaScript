window.addEventListener('load', solve);

function solve() {


    let addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', addFurniture);


    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let inputPriceElement = document.getElementById('price');

    //let informationElement = document.getElementById('information');
    let furnitureListElement = document.getElementById('furniture-list');


    function addFurniture(e){
        e.preventDefault();

        let model = modelInputElement.value;
        let year = Number(yearInputElement.value);
        let description = descriptionInputElement.value;
        let price = Number(inputPriceElement.value);

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        inputPriceElement.value = '';

        if (year <= 0 || price <= 0){
            return;
        }

        if(model == ''  || description == '' ){
            return;
        }

        let tableRowElements = document.createElement('tr');
        tableRowElements.classList.add('info');

        let modelTdElement = document.createElement('td');
        modelTdElement.textContent = model;
        let priceTdElement = document.createElement('td');
        priceTdElement.textContent = price.toFixed(2);

        let buttonsDataElement = document.createElement('td');

        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = 'More Info';

        let totalPriceElement = document.querySelector('.total-price');
       

        let buyItBtn = document.createElement('button');
        buyItBtn.classList.add('buyBtn');
        buyItBtn.textContent = 'Buy it';

        buttonsDataElement.appendChild(moreInfoBtn);
        buttonsDataElement.appendChild(buyItBtn);

        buyItBtn.addEventListener('click', (e) => {

            let currentTotalPrice = Number(totalPriceElement.textContent);

            tableRowElements.remove;
            hideRowElements.remove;
            totalPriceElement.textContent = (currentTotalPrice + price).toFixed(2);

        });
        

        tableRowElements.appendChild(modelTdElement);
        tableRowElements.appendChild(priceTdElement);
        tableRowElements.appendChild(buttonsDataElement);
        

        furnitureListElement.appendChild(tableRowElements);

        let hideRowElements = document.createElement('tr');
        hideRowElements.classList.add('hide');
        hideRowElements.style.display = 'none';

        let tdHideYear = document.createElement('td');
        tdHideYear.textContent = `Year: ${year}`;

        let tdHideDescription = document.createElement('td');
        tdHideDescription.setAttribute('colspan', 3);
        tdHideDescription.textContent = `Description: ${description}`;

        hideRowElements.appendChild(tdHideYear);
        hideRowElements.appendChild(tdHideDescription);


        furnitureListElement.appendChild(hideRowElements);



        moreInfoBtn.addEventListener('click', (e) =>{

            if (e.currentTarget.textContent == 'More Info'){
                e.currentTarget.textContent = 'Less Info'
                hideRowElements.style.display = 'contents';
                

            }else{
                e.currentTarget.textContent = 'More Info'

                hideRowElements.style.display = 'none';
            }

        });


    
    
        }
    }
    







