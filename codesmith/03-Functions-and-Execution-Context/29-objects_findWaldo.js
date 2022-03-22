/**
 * Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'.
 * If the key 'Waldo' is not found, the function should return 'Where's Waldo?'
 * -
 * @harryrf3 (2022-03-20T20:58:35.000-05:00)
 ***/

// ADD CODE HERE
const findWaldo = function (obj) {
  let result;
  for (const value in obj) {
    if (value == 'Waldo') {
      result = obj[value]; // I don't like how this I 'worded' this, can't seem to make the code 'read' in a way that it makes more sense.
    } else {
      result = 'Where\'s Waldo?';
    }
  }
  return result;
};
// Uncomment these to check your work!
const DC = { 'Bruce': 'Wayne', 'Harley': 'Quinn' };
const supernatural = { 'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown' };

console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'