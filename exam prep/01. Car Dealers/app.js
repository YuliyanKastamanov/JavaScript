window.addEventListener("load", solve);

function solve() {

  let makeInputElement = document.getElementById('make');
  let modelInputElement = document.getElementById('model');
  let yearInputElement = document.getElementById('year');
  let fuelInputElement = document.getElementById('fuel');
  let originalyCostInputElement = document.getElementById('original-cost');
  let sellingPriceInputElement = document.getElementById('selling-price');
  let tBodyElement = document.getElementById('table-body')
  let soldCarList = document.getElementById('cars-list');
  let profidMadeElement = document.getElementById('profit')

  let publishButtonElement = document.getElementById('publish');


  publishButtonElement.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    let makeInput = makeInputElement.value;
    let modelInput = modelInputElement.value;
    let yearInput = yearInputElement.value;
    let fuelInput = fuelInputElement.value;
    let originalyCostInput = originalyCostInputElement.value;
    let sellingPriceInput = sellingPriceInputElement.value;
    

    makeInputElement.value = '';
    modelInputElement.value = '';
    yearInputElement.value = '';
    fuelInputElement.value = '';
    originalyCostInputElement.value = '';
    sellingPriceInputElement.value = '';



    if (makeInput === "" || modelInput === "" || yearInput === "" || fuelInput === "" || originalyCostInput === "" || sellingPriceInput ==="") {

      return;
    }

    if (Number(originalyCostInput) >= Number(sellingPriceInput)) {

      return;
    }

    let trElement = document.createElement('tr');
    trElement.classList = 'row';

    let make = document.createElement('td');
    make.textContent = makeInput;
    let model = document.createElement('td');
    model.textContent = modelInput;
    let year = document.createElement('td');
    year.textContent = yearInput;
    let fuel = document.createElement('td');
    fuel.textContent = fuelInput;
    let price = document.createElement('td');
    price.textContent = originalyCostInput;
    let newPrice = document.createElement('td');
    newPrice.textContent = sellingPriceInput;

    let tdButtons = document.createElement('td');
    let editActionButton = document.createElement('button');
    editActionButton.classList = 'action-btn edit'
    editActionButton.textContent = 'Edit'
    

    let sellActionButton = document.createElement('button');
    sellActionButton.classList = 'action-btn sell'
    sellActionButton.textContent = 'Sell'

    tdButtons.appendChild(editActionButton);
    tdButtons.appendChild(sellActionButton);


    trElement.appendChild(make)
    trElement.appendChild(model)
    trElement.appendChild(year)
    trElement.appendChild(fuel)
    trElement.appendChild(price)
    trElement.appendChild(newPrice)
    trElement.appendChild(tdButtons)

    tBodyElement.appendChild(trElement)

    editActionButton.addEventListener('click', edit);
    sellActionButton.addEventListener('click', sell);

    

    function edit(e){


      makeInputElement.value = makeInput;
      modelInputElement.value = modelInput;
      yearInputElement.value = yearInput;
      fuelInputElement.value = fuelInput;
      originalyCostInputElement.value = originalyCostInput;
      sellingPriceInputElement.value = sellingPriceInput;
      trElement.remove();  

      



    }

    function sell(e){
      trElement.remove();

      let profidValue = Number(profidMadeElement.textContent)    

      let difference = sellingPriceInput - originalyCostInput;

      

      profidMadeElement.textContent = (profidValue + difference).toFixed(2);

      let liElement = document.createElement('li');
      liElement.classList = 'each-list'

      let makeModelSpanElement = document.createElement('span');
      makeModelSpanElement.textContent = `${makeInput} ${modelInput}`

      let yearSpanElement = document.createElement('span');
      yearSpanElement.textContent = `${yearInput}`;

      let profitMadeSpanElement = document.createElement('span');
      profitMadeSpanElement.textContent = sellingPriceInput - originalyCostInput

      liElement.appendChild(makeModelSpanElement);
      liElement.appendChild(yearSpanElement);
      liElement.appendChild(profitMadeSpanElement);

      

      soldCarList.appendChild(liElement);


      
    

      
    }

    

    

    

  }



}
