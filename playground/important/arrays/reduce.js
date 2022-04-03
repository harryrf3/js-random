/*
  Array.prototype.reduce()

  The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

  Syntax:

  reduce(function(previousValue, currentValue, currentIndex, array) { ... }, initialValue)
*/

/* 
String.slice(start?: number, end?: number): string
  The index to the beginning of the specified portion of stringObj. Returns a section of a string.
 */

function union (arrays) {
  let finalArray = [];

  const sliced = ((start, end) => {
    return arrays.slice(start, end);
  })
  console.log(sliced(0, 1));
  console.log(sliced(1, 2));
  console.log(sliced(2, 3));


  sliced.reduce((p, c) => {
    if (p.find(c)) finalArray.push(c);
  }, sliced);
  console.log(finalArray);
  return finalArray;
}

/*
TRY:
// push first array into `result`
    // loop second array
      // compare element of previous array with elements of current array, (maybe `.find` or `.includes`?)
      // if elements are not equal, push current element to `result`

  METHODS:

    // Add spliced list of arrays to result
    // 
*/

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]






// const flatArr = arrays.flat();
// const current = arrays.flat();
// let result = [];
// current.reduce((value) => {
//   for (const element of flatArr) {
//     if (value != element) result += `', ' ${element}`;
//   }
// })
// return result;

