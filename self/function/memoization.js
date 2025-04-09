// the memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning the result from it.


// const cache = {};
// function calculation(a, b) {
//     let result = (a + b) * (a + b) * (a + b)
//     console.log("calculation function is called: ", result)
//     return result;
// }

// function memory(a, b) {
//     const Key = a + ":" + b
//     if (!cache[Key]) {
//         const result = calculation(a, b);
//         cache[Key] = result;
//         return result;
//     } else {
//         console.time()
//         console.log("result from cache", cache[Key]);
//         console.timeEnd();
//         return cache[Key]
//     }
// }

const cache = {};

function calculation(...args) {
    const sum = args.reduce((acc, val) => acc + val, 0);
    const result = sum * sum * sum;
    console.time();
    console.log("calculation function is called:", result);
    console.timeEnd();
    return result;
}

function memory(...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
        const result = calculation(...args);
        cache[key] = result;
        return result;
    } else {
        console.time();
        console.log("result from cache:", cache[key]);
        console.timeEnd();
        return cache[key];
    }
}


memory(20, 30); // will call calculation
memory(20, 30); // will return from cache

// example 2 

// const calculation = (n) => {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum
// }

// const memory = (fun) => {
//     const cache = {};
//     return function (...args) {
//         let n = args[0];
//         if (n in cache) {
//             console.log("from cache ");
//             return cache[n];
//         }else{
//             let result = fun(n);
//             cache[n]=result;
//             console.log("from function");
//             return result;
//         }
//     }
// }

// const efficient = memory(calculation)

// console.time();
// console.log(efficient(5)); // calls function
// console.timeEnd();

// console.time();
// console.log(efficient(5)); // gets from cache
// console.timeEnd();
