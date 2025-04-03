// Shallow Copy & Deep Copy

// Shallow Copy

let obj = {
  name:"guri"
}

// method1
let user = Object.assign({},obj) // by using assign the change cannot reflect on orignal object
user.name = "gursangam"

// method2
let newUser = {...obj}
newUser.name="gursangam singh"

// console.log("obj: ",obj.name)          //obj:  guri
// console.log("user: ",user.name)       //user:  gursangam
// console.log("newUser: ",newUser.name) //newUser:  gursangam singh

// Problem with Shallow Copy
let pNewObj = {
  name:"guri",
  address:{
    city:"patiala",
    state:"punjab"
  }
}

let pNewUser = Object.assign({},pNewObj)
pNewUser.address.city = "mohali"
 
// console.log("pNewObj:",pNewObj.address.city) // pNewObj: mohali
// console.log("newUser:",pNewUser.address.city)// newUser: mohali

/* in which we change the pNewUser but it will change the orignal too because the above 
methods are only applicable for level1 of nesting to resolve this issue we use DEEP COPY */

// DEEP COPY
// in which we firstly convert Object to stringify and then back to object 
let dNewObj = {
  name:"guri",
  address:{
    city:"patiala",
    state:"punjab"
  }
}


let dNewUser = JSON.parse(JSON.stringify(dNewObj))
dNewUser.address.city = "mohali"

// console.log("dNewObj:",dNewObj.address.city) // patiala
// console.log("dNewUser:",dNewUser.address.city)// mohali

// Limitation and disadvantage to deep COPY
// when we create a deep copy of object with function/date method it will disappear or removed
// to resolve this issue we use lodash 
let LNewObj = {
  name:"guri",
  address:{
    city:"patiala",
    state:"punjab"
  },
  getData : function(){
    return "all data is here"
  }
}

console.log(LNewObj) 
/*
{
  name: 'guri',
  address: { city: 'patiala', state: 'punjab' },
  getData: [Function: getData]
}
*/

let lNewUser = JSON.parse(JSON.stringify(LNewObj))
console.log(lNewUser) // { name: 'guri', address: { city: 'patiala', state: 'punjab' } }


