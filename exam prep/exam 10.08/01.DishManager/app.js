window.addEventListener("load", solve);

function solve() {

  let firstNameInputElement = document.getElementById('first-name')
  let lastNameInputElement = document.getElementById('last-name')
  let ageInputElement = document.getElementById('age')
  let genderInputElement = document.getElementById('genderSelect')

  let descriptionInputElement = document.getElementById('task')

  let submitBtnElement = document.getElementById('form-btn')

  let inProglesElement = document.getElementById('in-progress')

  let finishCookingElement = document.getElementById('finished')

  let clearBtnElement = document.getElementById('clear-btn')

  let finalCountDishesInProgresElement = document.getElementById('progress-count')

  submitBtnElement.addEventListener('click', submit);




  function submit(e) {
    e.preventDefault();

    let firstName = firstNameInputElement.value;
    let lastName = lastNameInputElement.value;
    let age = ageInputElement.value;
    let gender = genderInputElement.value;
    let description = descriptionInputElement.value;

    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    ageInputElement.value = '';
    descriptionInputElement.value = '';


    if (firstName === '' || lastName === '' || age === '' || description === '') {
      return;
    }

    let liInProgresElement = document.createElement('li');
    liInProgresElement.classList = 'each-line'

    let articleInProgresElement = document.createElement('article');
    let h4NameInProgresElement = document.createElement('h4');
    h4NameInProgresElement.textContent = `${firstName} ${lastName}`
    let pGenderAgeInProgresElement = document.createElement('p');
    pGenderAgeInProgresElement.textContent = `${gender}, ${age}`
    let pDescriptionInProgresElement = document.createElement('p');
    pDescriptionInProgresElement.textContent = `Dish description: ${description}`;

    articleInProgresElement.appendChild(h4NameInProgresElement);
    articleInProgresElement.appendChild(pGenderAgeInProgresElement);
    articleInProgresElement.appendChild(pDescriptionInProgresElement);





    let editButton = document.createElement('button');
    editButton.classList = 'edit-btn'
    editButton.textContent = 'Edit'


    let completeButton = document.createElement('button');
    completeButton.classList = 'complete-btn'
    completeButton.textContent = 'Mark as complete'

    liInProgresElement.appendChild(articleInProgresElement);
    liInProgresElement.appendChild(editButton);
    liInProgresElement.appendChild(completeButton);

    inProglesElement.appendChild(liInProgresElement);

    let dishesInProcressCount = Number(finalCountDishesInProgresElement.textContent)
    dishesInProcressCount++
    finalCountDishesInProgresElement.textContent = dishesInProcressCount;


    editButton.addEventListener('click', edit);
    completeButton.addEventListener('click', complete)

    function edit(e) {

      firstNameInputElement.value = firstName;
      lastNameInputElement.value = lastName;
      ageInputElement.value = age;
      descriptionInputElement.value = description;
      genderInputElement.value = gender;
      dishesInProcressCount--;
      finalCountDishesInProgresElement.textContent = dishesInProcressCount;

      liInProgresElement.remove();

    }


  

    function complete(e) {

      
      
      let liFinishElement = document.createElement('li');
      liFinishElement.classList = 'each-line'

      let articleFinishElement = document.createElement('article');
      let h4NameFinishElement = document.createElement('h4');
      h4NameFinishElement.textContent = `${firstName} ${lastName}`
      let pGenderAgeFinishElement = document.createElement('p');
      pGenderAgeFinishElement.textContent = `${gender}, ${age}`
      let pDescriptionFinishElement = document.createElement('p');
      pDescriptionFinishElement.textContent = description;

      articleFinishElement.appendChild(h4NameFinishElement);
      articleFinishElement.appendChild(pGenderAgeFinishElement);
      articleFinishElement.appendChild(pDescriptionFinishElement);

      liFinishElement.appendChild(articleFinishElement);

      finishCookingElement.appendChild(liFinishElement);


      


      let dishes = finalCountDishesInProgresElement.textContent

      dishes--;
      finalCountDishesInProgresElement.textContent = dishes;

      liInProgresElement.remove();
      clearBtnElement.addEventListener('click', (clear))

      function clear(e){
    
            
        liFinishElement.remove()
    
      }




    }

    




  }

  clearBtnElement.addEventListener('click', (clear))

      function clear(e){
    
            
        finishCookingElement.removeChild
    
      }



}
