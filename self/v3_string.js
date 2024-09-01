let name ="guri"
let repoCount= 5
console.log(`my name is ${name} and my repo count is ${repoCount}`); // string interpolation

// another method to declare a string 

let gameName = new String(`Gursangam singh`)
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

const newString = gameName.substring(0,4)
console.log(newString);

const newString2 = gameName.slice(-15,2)
console.log(newString2);

const url= `https://gursangam/first%20web`
console.log(url.replace('%20' , '-'));
console.log(url.includes(`%20`));

console.log(gameName.split(` `))







