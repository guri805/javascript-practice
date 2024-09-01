let score="33";
console.log(typeof score); //string
let valueInNumber=Number(score);
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//33



let score2="33abc";
console.log(typeof score2); //string
let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2);//number
console.log(valueInNumber2);//NaN


let score3=null;
console.log(typeof score3);//object
let valueInNumber3=Number(score3);
console.log(typeof valueInNumber3);//number
console.log(valueInNumber3);//0


let score4=33;
console.log(typeof score4);//object
let valueInNumber4=String(score4);
console.log(typeof valueInNumber4);//number
console.log(valueInNumber4);//0

