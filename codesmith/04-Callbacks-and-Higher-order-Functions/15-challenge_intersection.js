/**
 * Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.
 * BONUS - Use reduce!
 * -
 * @harryrf3 (2022-03-27T16:03:02.000-05:00)
 ***/

// ADD CODE HERE
function intersection (input) {
  // accumulator starts as one of the arrays
  let result = input.pop();
  // loop through array of arrays
  while (input.length) {
    const current = input.pop();
    const newArr = [];
    // for each element in current
    current.filter((element) => {
      // if that element exists in accumulator
      if (result.includes(element))
        // push that element into newArray
        newArr.push(element);
    });
    // accumulator reassigned to newArray
    result = newArr;
  }
  console.log(result);
  // return accumulator
  return result;
}

// The above, but in 2023
// const intersection = (input) => {
//   return input.reduce((acc, curr) => {
//     let result = []
//     acc.forEach((el) => {
//       if (curr.includes(el)) { result.push(el) }
//     })
//     return result
//   })
// }

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
