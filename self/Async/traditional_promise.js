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
