/**
 * Create a function multiplyAll that takes an unknown number of integer arguments,
 * multiplies them all together,
 * and returns the result.
 *-
 * @harryrf3 (2022-03-04T09:40:16.000-05:00)
 ***/

// The Rest Operator '...' allows for an unlimited amount of arguments
function multiplyAll(...args) {
  const result = args.reduce((total, item) => {
    console.log('total:', total);
    console.log('item:', item);
    return item ? item * total : item + total;
  }, 1);
  return result;
}


/*
Alternate way of achieving the same result.

function multiplyAll() {
  const args = [...arguments];
  const result = args.reduce(total, item) => {
    retrun item ? item * total : item + total;
  }, 1);
  return result;
}
 */

// ADD CODE HERE 


// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)); // should log: 375