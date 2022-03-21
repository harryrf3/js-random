/**
 * Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
 * -
 * @harryrf3 (2022-03-19T18:17:06.000-05:00)
 ***/

function disemvowel (string) {
  // ADD CODE HERE
  // vowels: aeiou, flags: i (case insenstive), g (global, so we not stop at first vowel)
  const reg = /[aeiou]/ig;
  const newStr = string.replace(reg, '');
  return newStr;
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'

// TODO: Look into how to dynamically remove dipthongs
// Current Config: '/[aeiou]{2}' does not remove dipthongs from 'FOOD' or 'food'
// console.log('FOOD');
// console.log('food');