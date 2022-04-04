/**
 * Construct a function objOfMatches that accepts two arrays and a callback.
 * objOfMatches will build an object and return it.
 * To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array.
 * If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
 * -
 * @harryrf3 (2022-04-03T17:03:26.000-05:00)
 ***/

// ADD CODE HERE
// objOfMathces: a function that accepts two arrays and a callback and builds an object
function objOfMatches (arr1, arr2, cb) {

  // reduce: reduce(outputObj, currentArr, {emptyObj})
  // reduce: using the callback, test each element of the first input
  // if the ouput matches the second arrays corresponding element's index
  // the element from the first array becomes the key in the object
  // the element from the second array becomes the value in the object

  return arr1.reduce((outputObj, currentArr) => {
    arr2.forEach((element) => {
      if (currentArr.includes(element)) {
        outputObj += outputObj[element];
      }
    });
    return cb(outputObj);
  }, {});
}
// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser (str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }