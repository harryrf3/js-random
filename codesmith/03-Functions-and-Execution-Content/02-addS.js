/**
 * Create a function addS that accepts a string,
 * and returns the string with an 's'
 * added to the end.
 * 
 * I've attempted to keep the function as pure as possible.
 *-
 * @harryrf3 (2022-02-11T14:40:58.000-05:00)
 ***/

// ADD CODE HERE
function addS(str, letter) {
  return str.concat(letter);
} 

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat', 's')); // should log: 'cats'
