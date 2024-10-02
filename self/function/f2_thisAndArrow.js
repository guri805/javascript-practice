// +++++++++++++THIS FUNCTION

const user = {
  username : "gursangam" ,
  price : 999 ,

  welcomeMessage : function() {
    console.log(`${this.username} , welcome to website`); //this refers to the current context
    console.log(this);
  }
}
// // // +++++++++++++++++++ THIS WILL USE ONLY IN OBJECT
user.welcomeMessage(); // gursangam , welcome to website 

// user.username = "guri";

// user.welcomeMessage();  //guri , welcome to website 
// // console.log(this);//in global this will return a {} 


// +++++++++++ARROW FUNCTION 

// function chai() {
//   let username = "gursangam"
//   console.log(this.username);
// }
// chai(); //undefined

// let chai = function() {
//   let username = "gursangam"
//   console.log(this.username);
// }
// chai(); //undefined

// let chai = () => {
//   let username = "gursangam"
//   console.log(this.username); // undefined
//   console.log(this);          // {}
// }
// chai(); //undefined

// ++++++++++ define arrow function

// const addTwoNumber = (num1,num2) =>{       // mehthod 1 
//   return num1+num2;
// }
// RETURN WILL BE MANDATORY IN OBJECT
// console.log(addTwoNumber(3,5)); // 8

// ++++++++ implicit 
// const addTwoNumber = (num1,num2) =>  num1+num2  // mehtod2
// const addTwoNumber = (num1,num2) =>  (num1+num2)   // method3
// console.log(addTwoNumber(3,5)); // 8

// +++++++++ for onbject call 
const addTwoNumber = () =>  ({username : "gursangam"})   
// console.log(addTwoNumber());  // { username: 'gursangam' }

