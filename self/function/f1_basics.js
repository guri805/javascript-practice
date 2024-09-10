// function addTwoNumber(number1 , number2){
//   console.log(number1 + number2);
// }

// addTwoNumber(3 , 4);
// const result  = addTwoNumber(3,5); // 8
// console.log("result :" , result);  //result : undefined

// function addTwoNumber(number1 , number2){
//   let result = number1 + number2;
//   return result;
// }

// const result  = addTwoNumber(3,5); 
// console.log("result :" , result);  //result : 8


// function loginUserMessage(username) {
//   return `${username} just logged in`
// }
// console.log(loginUserMessage("guri")); //guri just logged in

// if we will not give a input loginUserMessage() it will give undefined just logged in to check this we use if else

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("enter a username");
//     return
    
//   } else {
//     return `${username} just logged in` 
//   }

// }
// console.log(loginUserMessage())
 
// function calculateCartPrice(...num) {
//                           // ^rest opetator
//   return num;
// }
// console.log(calculateCartPrice(200,400,500,200)); //[ 200, 400, 500, 200 ] return the values in array

// fuction in object

// const user ={
//   username: "guri",
//   price: 324
// }
// function handleObject(anyobject) {
//   console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
// }
// // handleObject(user); //username is guri and the price is 324
// // another method
// handleObject({
//   username: "guri",
//   price: 324
// })
// // username is guri and the price is 324

// funtion in array

const myNewArray = [200 ,400 ,500 ,600];

function returnSecondValue(getarray) {
  return getarray[1];
}
// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200 , 400 ,500 ,600])); //400
