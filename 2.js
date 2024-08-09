//1 method to find odd and even 

 let number;
 let rem;
  number=20;
  checker();// why we dont use console.log here but in below code we use?? 

 function checker(){

  rem=number%2;
  
   if(rem==1){
           return console.log(`number ${number} is odd`);
       }
         else{
           return console.log( `number ${number} is even`);
        }
     }


//2 method to find larger number 

let num1;
let num2;
num1=10;
num2=15;
console.log(large());


function large(){

  if(num1>num2){

    return `number ${num1} is greater than ${num2}`;

  }
  else{
    return `${num1} is not larger number`;
  }



}

//3 method to convert celsius to farehenheit

let celsius;
let farehenheit;

function convert(celsius){

  farehenheit=((9/5)*celsius)+32;
  console.log(`${farehenheit}`);

}

convert(40);
convert(20);
convert(-5);
convert(5);




let product={
  name: 'jeans',
  price: '546',
  color: 'black',
size: 'bestfit',
'delievery-time': 'same day delievery',

}

// localStorage.setItem('product', JSON.stringify(product));

console.log(localStorage.getItem('product'));

localStorage.removeItem('name');
localStorage.clear();
console.log('hello world');