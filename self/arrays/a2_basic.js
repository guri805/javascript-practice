const marvelHeros = [`thor`,`ironman`,`spiderman`];
const dcHeros = [`superman`,`flash`,`batman`];
const indHeros = [`shaktiman`];

// METHOD 1 push the dcHeros to marvelHeros 
// marvelHeros.push(dcHeros);
// console.log(marvelHeros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// during push the all the dcHeros array will push to the 3 place of array 
// console.log(marvelHeros[3][1]);

// METHOD 2 concat function to merge a array 
// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// it will merge two array in a new single array

// METHOD 3 by using spread operator
// in which we can merge more than two arrays
const allHeros = [...marvelHeros,...dcHeros,...indHeros]; 
console.log(allHeros); // ['thor','ironman','spiderman','superman','flash','batman','shaktiman']

// flat method using when we have multiple depth array
const depthArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_depthArray = depthArray.flat(Infinity)
// console.log(real_depthArray); // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// when the data is comming from the another side like(node data) we can check the data is in array type or not and convert them into array type
// console.log(Array.isArray(`gursangam`)); //check the type  //false
// console.log(Array.from(`gursangam`));   //convert to array //['g', 'u', 'r','s', 'a', 'n','g', 'a', 'm']
console.log(Array.from({fullName : `gursangam`})); // it will give empty string we want to specity we can convert key or value //[]

let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;
// console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
 











