
/*
IIFE(Immediately-invoked Function Expressions) Anında çağrılan fonksiyon 

*/

// Cevap 1
(function doubleNumber(num) {
  return num * 2;
})(10);


// cevap 2
(function () {

  function getTotal(a, b) {
    return a + b;
  }

  var $ = 'currency';

  if (true) console.log('hello world');

})();