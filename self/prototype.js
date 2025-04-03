// PROTOTYPE 
/*
defination: prototype are the mechanism by which the js objects is inherit the features of one another.
automaticaly the proto is create by the js when we create a object
*/

const setProto = {
 getFullName: function () {
    return (`${this.firstName} ${this.lastName}`)
  },
  getStudentAge: function () {
    let age = new Date().getFullYear() - this.birthYear;
    return age
  }
}

const student = {
  firstName: "gursangam",
  lastName: "singh",
  birthYear: 2001,
  /* method 1 (when we use this method it will show in terminal means it will load 
  when we call a student )*/
  // age: setProto.getStudentAge
}
/* method 2(it will not appear in object when log it will calll when we call them ) */
student.__proto__ = setProto; // we can inherit the propertise of proto object here

const teacher = {
  firstName: "ustad",
  lastName: "singh",
  birthYear: 1990,
}
teacher.__proto__ = setProto; // we can inherit the propertise of proto object here


console.log(teacher.getFullName()) // ustad singh
console.log(teacher.getStudentAge()) // 35

console.log(student.getFullName()) // gursangam singh
console.log(student.getStudentAge()) // 24


// Add prototype globally || create by own 
Object.prototype.projectName = "the project name is e-commerce "
let y = {};
console.log(y.projectName) // the project name is e-commerce

Object.prototype.myData = function(){
  return "data"
}
console.log(y.myData()) // data

let x = "hello";

String.prototype.data = "this is proto data";

console.log(x.data); // "this is proto data"

String.prototype.customLength = function () {
  return this.length + 2; 
};

console.log(x.customLength()); // 7 (5 + 2)

