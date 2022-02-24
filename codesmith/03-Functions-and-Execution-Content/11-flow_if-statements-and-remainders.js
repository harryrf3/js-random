/**
 * Write a function iLoveEvenNumbers that takes a number argument and
 * returns 'Oh Yeah Evens!' if the argument is even
 * or 'I am too normal for odd numbers' if the argument is odd.
 *-
 * @harryrf3 (2022-02-23T21:03:15.000-05:00)
 ***/

// ADD CODE HERE
function iLoveEvenNumbers(num) {
  if (num % 2 === 0) {
    // return an even number
    console.log('EVEN:', num);
    return 'Oh Yeah Evens!';
  }
  console.log('ODD:', num);
  return 'I am too normal for odd numbers';
}

// Uncomment these to check your work!
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
