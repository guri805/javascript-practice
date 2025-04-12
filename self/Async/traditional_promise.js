// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
const cart = ["shoes,","shirt"];

createOrder(cart, function(orderId){
  proceedToPayement(orderId,function(paymentInfo){
    showOrderSummery(paymentInfo){
      showOrderSummery();
    }
  })
})

const promise = createOrder(cart)

createOrder(cart)
.then(function(orderId){
  return proceedToPayement(orderId);
})
.then(function(paymentInfo){
  return showOrderSummery(paymentInfo)
})

createOrder(cart)
.then(orderId => proceedToPayement(orderId);})
.then(paymentInfo => showOrderSummery(paymentInfo)})


// custom api 
const cart = ["shoes", "shirt"];

const promise = createOrder(cart)
console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
})
.catch(function (err) {
    console.log(err.message);
})

function validateCart(cart) {
    return false;
}

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = "cart is empty"
            reject(err)
        }
        const orderId = "12345566"
        if (orderId) {
            setTimeout(function () {
                resolve(orderId)
            }, 5000)
        }
    })
    return pr
}

