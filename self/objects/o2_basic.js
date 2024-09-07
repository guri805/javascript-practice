// single ton
// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "guri";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);                    //{ id: '123abc', name: 'guri', isLoggedIn: false }

// Access methods
// console.log(Object.keys(tinderUser));       //[ 'id', 'name', 'isLoggedIn' ] type is array 
// console.log(Object.values(tinderUser));    //[ '123abc', 'guri', false ]
// console.log(Object.entries(tinderUser));   //[ [ 'id', '123abc' ], [ 'name', 'guri' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //it is used to check the value is present or not  //true
 
const regularUser = {
  email : "guri@google.com" ,
  fullName : {
    userFullName : {
      FirstName : "gursangam" ,
      lastName : "singh"
    }
  }
}
// console.log(regularUser);                 //{ email: 'guri@google.com', fullName: { userFullName: { FirstName: 'gursangam', lastName: 'singh' } }}
// console.log(regularUser.fullName);        // { userFullName: { FirstName: 'gursangam', lastName: 'singh' } }
// console.log(regularUser.fullName.userFullName.FirstName); //gursangam

// merge objects
const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "a" , 4 : "b"};
const obj3 = {5 : "a" , 6 : "b"};
// METHOD 1
                           //  target  ,     source
// const obj4 = Object.assign(   {}   , obj1,obj2,obj3); // all the source data will put into the target if we not use {} all the data go to obj1
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// METHOD 2 
const obj4 ={...obj1,...obj2,...obj3};
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



