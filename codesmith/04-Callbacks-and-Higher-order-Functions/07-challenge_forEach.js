/**
 * Part 1
 * 
 * Create a function forEach which takes an array and a callback, and runs the callback on each element of the array.
 * forEach does not return anything. Please do not use the native forEach or map method.
 * 
 * let alphabet = '';
 * const letters = ['a', 'b', 'c', 'd'];
 * forEach(letters, function(char) {
 *   alphabet += char;
 * });
 * console.log(alphabet); //prints 'abcd'
 * 
 * Part 2
 * 
 * Now let's rebuild map from the previous challenge.
 * This time instead of using a for loop, you're going to use the forEach we just created.
 * -
 * @harryrf3 (2022-03-25T22:11:11.000-05:00)
 ***/

// ADD CODE HERE

function forEach (array, callback) {
  // iterate through our array with a for loop
  for (let i = 0; i < array.length; i++) {
    // invoke the callback function, passing in the current element of the array 
    callback(array[i]);
  }
}

function map (arr, call) {
  // initialize a new array
  const output = [];
  //  call forEach with the passed in array and a new function that will take an array element
  forEach(arr, function (element) {
    // invoke the passed in callback function with the current array element given to us by forEach
    output.push(call(element));
    // add the return value to our array
  });
  // return our array containing the results
  return output;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]