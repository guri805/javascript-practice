const arr = [1 , 2 , 3 , 4];

// array methods 

// console.log(arr.length);        // 4
// arr.push(5);                   //[ 1, 2, 3, 4, 5 ]
// arr.pop(5);                    //[ 1, 2, 3, 4]
// arr.unshift(0);                //[ 0, 1, 2, 3, 4 ] add at 1 place 
// arr.shift();                   //[ 1, 2, 3, 4 ]    remove from 1 place
// console.log(arr.at(2));               // 3
//console.log(arr.indexOf(2));           //1
//console.log(arr.includes(3));         // true
// console.log(arr.fill(0));            //[ 0, 0, 0, 0 ]
// console.log(arr.reverse());          //[ 4, 3, 2, 1 ] 
// console.log(arr.sort());             //[ 1, 2, 3, 4]
// console.log(arr.join("-"));          //1-2-3-4
// console.log(arr.toString());            //1,2,3,4
// console.log(Array.from("code"));        //[ 'c', 'o', 'd', 'e' ]
// delete arr[1];
// console.log(arr);                      //[ 1, <1 empty item>, 3, 4 ]

// const found = arr.find(element => element > 2);
// console.log(found); // 3

// const arr1 = [5,12,8,130,44];
// const isLarger = (element => element > 13);
// console.log(arr1.findIndex(isLarger)); // 130

// arr.copyWithin(2,0);
// console.log(arr); //[ 1, 2, 1, 2 ]
const arr2 =[1,2,3,4,5,6,7,8];
arr2.copyWithin(2,0,2);
// console.log(arr2); //[1, 2, 1, 2, 5, 6, 7, 8]



 


