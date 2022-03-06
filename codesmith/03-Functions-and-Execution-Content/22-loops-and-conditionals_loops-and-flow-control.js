/**
 * Write a function mergingTripletsAndQuints which takes in two arrays as arguments.
 * This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5.
 * The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
 *-
 * @harryrf3 (2022-03-05T23:24:07.000-05:00)
 ***/

function mergingTripletsAndQuints (array1, array2) {
  // ADD CODE HERE
  let result = [];
  for (const element of array1) {
    if (element % 3 || element % 5) {
     result = array1.map((num, index) => {
       return num + array2[index]
      })
    }
  }
  return result;
}



  // Uncomment these to check your work!
  console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
  console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]