/**
 * Examine the code.
 * Determine what arguments must be passed
 * into `isX1` and `isX2` respectively
 * to obtain an output of true for both,
 * and pass in the arguments accordingly.
 *
 *-
 * @harryrf3 (2022-02-11T19:49:20.000-05:00)
 ***/

const x = 3; // global scope

function isX1(num) {
  const x = 5; // local scope
  return num === x; // returns local scope
}

function isX2(num) {
  return num === x; // returns global scope
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true
