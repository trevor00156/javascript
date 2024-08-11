// below expression can get value of number of times button clicked from local storage ,if not found it can take other value 0.

let nooftimesbuttonclicked=localStorage.getItem('nooftimesbuttonclicked')||0;

//this function checks how many times button pressed and change the color of number based on whether it is even or odd.
//even= green , odd=  red.
function buttonpressed(){  // this check how many times button pressed.
  nooftimesbuttonclicked++;
  localStorage.setItem('nooftimesbuttonclicked',nooftimesbuttonclicked);
  updatebutton();


}



function updatebutton() {

  let button =document.querySelector('#button');


  button.innerText=nooftimesbuttonclicked; // it changes the inner text of element when button is pressed.

  if(nooftimesbuttonclicked%2==0){

  button.classList.remove('js-odd');  //this can change the property of css by class list 
  button.classList.add('js-even');

  }else{
  button.classList.remove('js-even');
  button.classList.add('js-odd');
  }


}

updatebutton();


