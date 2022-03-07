/**
 * Write a function mergingTripletsAndQuints which takes in two arrays as arguments.
 * This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5.
 * The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
 *-
 * @harryrf3 (2022-03-05T23:24:07.000-05:00)
 ***/

function mergingTripletsAndQuints (arr1, arr2) {
  let mapped;
  const result = arr1.map((element, value) => {

    // If value of element divided by 3 or 5 equals 0
    // if (element % 3 === 0 || element % 5 === 0) {
    //   mapped = element + arr2[value];
    // } else {
    //   mapped = element;
    // }

    // Same as above chain.
    element % 3 === 0 || element % 5 === 0 ? mapped = element + arr2[value] : mapped = element;

    return mapped;
  });
  return result;
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]



// TODO -
// Create a function which takes in two arrays as arguments
// function mergingTripletsAndQuints (arr1, arr2) {
//   // Create a variable called 'result' which stores new array
//   let result;
//   // Loop through each element of arr1
//   for (const element of arr1) {
//     // If elements in 'arr1' are divisible by 3 or 5
//     if (element % 3 || element % 5) {
//       result = arr1.map((element, index) => {
//       // Assign the replaced value at index of 'arr1' with sum of itself plus value of same index of 'arr2' to 'result'
//       return arr1[element] + arr2[element]
//       });
//     }
//   }
//   // Return 'result'
//   return result;
// }