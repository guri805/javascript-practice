const  myNums = [1,2,3];

// const total = myNums.reduce( function (acc,curVal) {
//     console.log(`acc : ${acc} and curVal : ${curVal}`);
//     return acc+curVal;
// },0)

const total =myNums.reduce( (acc,curVal) => acc+curVal, 0)
// console.log(total); // 6
/*  OUTPUT
acc : 0 and curVal : 1
acc : 1 and curVal : 2
acc : 3 and curVal : 3
6
*/

// Exercise
const shoppinCart = [
    {
        itemName :"js course",
        price : 2999
    },
    {
        itemName :"py course",
        price : 1999
    },
    {
        itemName :"c++ course",
        price : 2999
    },
    {
        itemName :"data science course",
        price : 12999
    },
];

const priceToPay = shoppinCart.reduce( (acc,item) => acc+item.price,0);
console.log(priceToPay);
/*  OUTPUT
20996
*/
