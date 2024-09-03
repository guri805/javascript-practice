const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toFixed(2)); //it gives the decial digits 100.00
// console.log(balance.toString);

const otherNumber = 123.32234;
console.log(otherNumber.toPrecision(5)); // it gives the digits from left to right 123.32

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000 value as per usa standards
console.log(hundreds.toLocaleString(`en-IN`)); //10,00,000






