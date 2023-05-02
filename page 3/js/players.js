'use strict'


function introduce() {
  const mathYaer = ( new Date().getFullYear() - 2005 )

  const objectIntroduce = {
    'First name' : 'Maks' , 
    'Last name' : 'Trukan',
    Age : `${mathYaer}`
  }

  console.log(objectIntroduce)

}

console.log(introduce())


function numberSelected(squareNumber) {
  
  let selectedNumbers = [];
  let squareNumbers = document.querySelectorAll('.square-number');
  let buttonStart = document.getElementById('buttonStart');

  if (selectedNumbers.includes(squareNumber)) {
    squareNumber.style.border = '';
    selectedNumbers.splice(selectedNumbers.indexOf(squareNumber), 1);
  } else {
    squareNumber.style.border = '3px solid rgb(228, 228, 3)';
    selectedNumbers.push(squareNumber);
  }

  if (selectedNumbers.length > 3) {
    for (let i = 0; i < squareNumbers.length; i++) {
      if (!selectedNumbers.includes(squareNumbers[i])) {
        squareNumbers[i].disabled = true;
      }
    }
    buttonStart.disabled = false;
  } else {
    for (let i = 0; i < squareNumbers.length; i++) {
      squareNumbers[i].disabled = false;
    }
    buttonStart.disabled = true;
  }
}









