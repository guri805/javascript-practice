// Immediate Invoke Function Expression
// It is used to prevent from the global pollution in scope
(function chai() {
       // ^ named iife
  console.log(`connected to DB`);
})();
// ; is must in end

( () => {
  console.log(`connected to DB two`);
})();

( (fullname) => {
  console.log(`connected to DB two ${fullname}`);
})(`guri`)