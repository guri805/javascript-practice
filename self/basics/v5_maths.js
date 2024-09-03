console.log(Math);              // object math
console.log(Math.abs(-5));     //5
console.log(Math.round(4.3));  //4
console.log(Math.min(4,3,6,8));  //3
console.log(Math.max(4,3,6,8));  //8


console.log(Math.random()); 
console.log((Math.random() * 10) + 1); 
console.log(Math.floor(Math.random() * 10) + 1); //exact single digit value like 1

const min=10;
const max=20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min) ); 
