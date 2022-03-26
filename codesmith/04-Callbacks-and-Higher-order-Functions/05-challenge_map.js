/**
 * Create a function subtractTwo that accepts a number and returns that number minus 2.
 *
 * Then create a function map that takes two inputs -
 *   1. an array of numbers (a list of numbers)
 *   2. a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
 *
 * Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
 *
 * Please do not use the native map or forEach method.
 *
 * map([3,4,5], subtractTwo); //-> [1,2,3]
 * subtractTwo(10); //-> 8
 * subtractTwo(12); //-> 10
 * -
 * @harryrf3 (2022-03-25T21:45:23.000-05:00)
 ***/

// ADD CODE HERE
function subtractTwo (num) {
  return num - 2;
}

function map (array, callback) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]