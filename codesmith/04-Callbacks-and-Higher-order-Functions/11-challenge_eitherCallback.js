/**
 * Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs.
 * 
 * Notice that the lines of code testing your work are using functions and an array from previous challenges.
 * 
 * The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.
 * -
 * @harryrf3 (2022-03-26T06:38:55.000-05:00)
 ***/

function eitherCallback (callback1, callback2) {
  // ADD CODE HERE
  // return a function containing parameters of conditional in filterArray for loop
  return (element, index, array) => { // index and array are not needed, but I kept them here for referring back to as a 'note' later
    // return boolean if callback is true
    return callback1(element) || callback2(element);
  };
}

// Uncomment these to check your work!
function filterArray (array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]