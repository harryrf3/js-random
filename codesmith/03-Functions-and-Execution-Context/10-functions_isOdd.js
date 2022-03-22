/**
 * Create a function isOdd that accepts a number argument.
 * isOdd will return true if the number is odd and false if the number is even.
 *-
 * @harryrf3 (2022-02-23T17:16:01.000-05:00)
 ***/

// ADD CODE HERE
function isOdd(num) {
  if (num % 2 === 0) {
    // num is even
    return false;
  }
  // num is odd
  return true;
}

// Uncomment these to check your work!
console.log(isOdd(5)); // should log: true