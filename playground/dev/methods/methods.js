// Reverse an array from first to last index
const numbers = [22, 3, 48, 6, 98, 10];
const letters = ['a', 'b', 'c']
// const string = 'Hello, my name is Harry.'

// Needs more work to be able to pass strings

const reverseArray = (arr) => {
  // arr gets sliced at spaces between elements
  const sliced = arr.slice('');
  // sliced gets assigned to reversed and reverses the order
  const reversed = sliced.reverse();
  // reversed array gets returned
  return reversed;
}

// console.log(reverseArray(numbers))
// console.log(reverseArray(letters))
// console.log(reverseArray(string))


// .sort()

const sortArray = [1112, 13, 2324, 34, 56, 500, 'Harry', 2, 'Ted']

const sorted = sortArray.sort();


// console.log(sorted)


// reduce pre-ES6

function reduce(array, callback, accumulator) {
  // copy initial accumulator value
  let accumulatedValue = accumulator;
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // keep track of current value
    const element = array[i];
    // call callback with parameters on accumulatedValue
    accumulatedValue = callback(accumulatedValue, element);
  }
  return accumulatedValue;
}

const nums = [4, 1, 3];
// add accumulatedValue and element together
const add = function (a, b) {
  return a + b;
};
// variable, callback, start accumulatedValue at 0
console.log(reduce(nums, add, 0)); // should log 8



