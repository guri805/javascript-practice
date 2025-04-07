// lexical scope 

// Lexical scope (also known as static scope) means that scopeis determined at the time of 
// writing the code, not at runtime.The scope of a variable is based on its position in the
// source code.

let data = 100;
const lexicalExample = function (){
  let a = 10;
  return data*a // the global values are accessible inside the function
}
// console.log(a) // error because the a is not accessible outside the function scope
// console.log(lexicalExample()) // 1000


// closure 

// A closure is a function that remembers the variables from its lexical scope even when the 
// function is executed outside that scope.

// Closures allow functions to "close over" variables and retain access to them even after the
// outer function has finished executing.

// Example 1

// function test(){
//   let a = 10;
//   function inner(){
//     console.log(a)
//   }
//   inner();
// }
// test() // 10 

// Example 2

// function test(){
//   let a = 10;
//   return function inner(){
//   return a;
//   }
// }
// let inner = test()
// console.log(inner()) // 10

// in which the inner function remembers the outer value a 
// we can check in console by using console.dir()

// Example 3

// function outer(){
//   let data = 10;
//     return function test(){
//       let a = 10;
//       return function inner(){
//       return a*data;
//       }
//     }
// }

// let test = outer()
// let inner = test()
// console.log(inner()) //100

// Example 4

// function test(){
//   let a = 10;
//   let fun = function inner(){
//     return a*a;
//   }
//   a = 20;
//   return fun
// }
// let inner = test()
// console.log(inner()) // 400
// the output is 400 beacause the 20 is declate after a=10 and before the return fun

// Example 5

function test(){
  let a = 10;
  let fun = function inner(){
    return a++;
  }
  return fun
}
let inner = test()
console.log(inner()) //10
console.log(inner()) //11
console.log(inner()) //12
console.log(inner()) //13
console.log(inner()) //14

// the which it will remembers the value of a 
