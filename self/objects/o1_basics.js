// single ton
// object.

// object iteration

const mySym = Symbol("key1");

const jsUser = {
  name : "gursangam",
  "full name" : "gursangam singh",
  age : 18 ,
  location : "mohali",
  email : "guri@gmail.com" ,
  [mySym]: "myKey1" ,
  isLoggedIn : false ,
  lastLogginDays :["monday" , "Friday"]
}

console.log(jsUser.email); // guri@gmail.com it gives output but the value is in string it will give error ("email")
// // to avoid this we use 
// console.log(jsUser[`email`]); //guri@gmail.com
// // console.log(jsUser.full name); error
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);
 
// change the value
// jsUser["email"] = "guri@pro.com";
// console.log(jsUser["email"]);

// Object.freeze(jsUser); in which the value cannot be updated

jsUser.greeting = function () {
  console.log("welcome js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function () {
  console.log(`welcome js user, ${this["full name"]}`);
}
console.log(jsUser.greetingTwo());




