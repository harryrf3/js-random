/**
 * Using a FOR loop, write a function getTheSum which adds
 * each element in arr to find the array total.
 *-
 * @harryrf3 (2022-03-01T22:05:18.000-05:00)
 ***/

 function getTheSum(arr){
  // ADD CODE HERE
  let total = 0;
  arr.forEach(element => {
    total += element;
  });
  // for (let i = 0; i < arr.length; i++) {
    // total += arr[i];
  // }
  return total;
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33