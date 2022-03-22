/**
 * Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr.
 * The value returned should be an array with the low, high, and range.
 * -
 * @harryrf3 (2022-03-15T00:07:11.000-05:00)
 ***/


function getTheRange (arr) {
  // ADD CODE 
  const min = arr.reduce((a, b) => Math.min(a, b)); // find the smallest number
  const max = arr.reduce((a, b) => Math.max(a, b)); // find the largest number
  const result = [min, max, max - min]; // smallest, largest, largest - smallest
  return result;
}

// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]