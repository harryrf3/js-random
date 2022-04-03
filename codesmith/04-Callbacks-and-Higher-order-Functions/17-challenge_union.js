/**
 * Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
 * 
 * If there are duplicate elements, only add it once to the new array. 
 * Preserve the order of the elements starting from the first element of the first input array. 
 * 
 * BONUS - Use reduce!
 * -
 * @harryrf3 (2022-03-31T17:13:55.000-05:00)
 ***/

// ADD CODE HERE
function union (input) {
  // use reduce to iterate through outer array of arrays (return eval'd result)
  return input.reduce((outputArr, currentArr) => {
    // iterate thru each inner arr to access each element
    currentArr.forEach(el => {
      // if element is not present in output
      if (!outputArr.includes(el)) outputArr.push(el)// add element to output
    });
    // return output
    return outputArr;
  }, []); // init empty arr
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]