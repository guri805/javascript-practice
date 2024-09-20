const myNums = [1,2,3,4,5,6,7,8,9,10];

// +++++++++ Map
// const newNums = myNums.map( (num) => num + 10 );
// const newNums = [];
// myNums.forEach( (num) => {
//     newNums.push(num + 10);
//     return num;
// })

// console.log(newNums);
/*  OUTPUT
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
*/

// ++++ chaining

// const newNums = myNums.map( (num) => num*10).map( (num) => num+1);
// console.log(newNums);
/*  OUTPUT
[11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
*/

const newNums = myNums.map( (num) => num*10).map( (num) => num+1).filter( (num) => num >= 40 );
console.log(newNums);
/*  OUTPUT
[41, 51,  61, 71, 81, 91, 101]
*/