/**
 * Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs.
 * The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.
 * -
 * @harryrf3 (2022-03-26T06:12:38.000-05:00)
 ***/

function eitherFilter (array, callback1, callback2) {
  // ADD CODE HERE
  const output = [];
  for (let i = 0; i < array.length; i++) {
    // if either is true, push element into output
    if (callback1(array[i]) || callback2(array[i])) output.push(array[i]);
  }
  return output;
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]