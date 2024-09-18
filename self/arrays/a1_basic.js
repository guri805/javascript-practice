const myArr = [1,2,3,4];

console.log(myArr[0]);

//method

// myArr.push(6);         1,2,3,4,6
// myArr.pop();           1,2,3,4
// myArr.unshift(9)       9,1,2,3,4
// myArr.shift()          1,2,3,4

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr); // change to string type
// console.log("orignal" , myArr);

const newArr1 = myArr.slice(1,3);
// console.log("slice array",newArr1);
// console.log("orignal" , myArr);
const newArr2 = myArr.splice(1,3); // In splice array the orginal array will be changed the splice values will be pop from the orignal array 
// console.log("splice array",newArr2);
// console.log("orignal" , myArr);




