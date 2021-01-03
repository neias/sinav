
// y:  200
// ReferenceError: x is not defined

'use strict';
 
(function() {
  var x = y = 200;
})();
 
console.log('y: ', y);
console.log('x: ', x);