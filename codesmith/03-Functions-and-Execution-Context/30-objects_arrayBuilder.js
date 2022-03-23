/**
 * Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements.
 * The order of the elements in the array does not matter, but repeated elements should be grouped.
 * -
 * @harryrf3 (2022-03-22T15:35:51.000-05:00)
 ***/

function arrayBuilder (obj) {
  const output = [];

  for (const key in obj) {
    let count = obj[key];
    while (count > 0) {
      output.push(key);
      count--;
    }
  }
  return output;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []