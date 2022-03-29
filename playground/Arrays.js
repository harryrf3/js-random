/**
 * Practicing Array Methods
 * ------------------------
 * Quokka.js Instructions:
 * Use CTRL + K, Q to see instant results.
 * -
 * @params method(required, [optional])
 *-
 * @harryrf3 (2022-03-04T23:20:32.000-05:00)
 ***/


const nums = [1, 2, 3, 23, 23, 324, 231];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const lorem = ['Lorem', 'Ipsum', 'lorem', 'ipsum', 'LOREM', 'IPSUM'];
const people = [
  { name: "Harry", age: 36 },
  { name: "Desireé", age: 37 },
  { name: "Paul", age: 32 },
  { name: "George", age: 19 },
  { name: "Vanessa", age: 32 }
];


/* 
  Array.prototype.concat()

    Returns an new array that is the calling array joined with other array(s) and/or value(s).

    This method does not change the existing arrays, but instead returns a new array.

    concat(value0, [value2], ... , [valueN])
*/

// Concatenates nums and letters
const arrConcat1 = nums.concat(letters);
console.log(arrConcat1);

// Concatenates nums, letters, and lorem
const arrConcat2 = nums.concat(letters, lorem);
console.log(arrConcat2);

// Concatenates lorem, nums, letters, and people
const arrConcat3 = lorem.concat(nums, letters, people);
console.log(arrConcat3);

// Admends array and ignores []'s
const arrConcat4 = letters.concat(1, [2, 4]); // produces same result as .concat(1, 2, 4)
console.log(arrConcat4);

// Amdends array and adds nested input
const arrConcat5 = letters.concat(1, [[2, 4]]);
console.log(arrConcat5);

// Amends array and adds further nested input
const arrConcat6 = nums.concat([1, [2, 4, [6]]]);
console.log(arrConcat6);

// Concatenates letters to nums in a sub-array
const arrConcat7 = nums.concat([letters]);
console.log(arrConcat7);

// Concatenates nums with letters index 1, letters index 4, letters index 5
const arrConcat8 = nums.concat(letters[1], letters[4], letters[5]);
console.log(arrConcat8);


/* 
  Array.prototype.copyWithin()

    The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

    copyWithin(target, [start], [end])
*/

const arrCopyWithin1 = letters.copyWithin(1, 3, 6);
console.log(arrCopyWithin1);


/*
  Array.prototype.fill() 

    Changes all array elements from start to end index to a static value and returns the modified array

    fill(value, [start], [end])
*/

// Replaces indicies 0 thru 3 with 'replaced'
const arrReplace = nums.fill('replaced', 4, 6);
console.log(arrReplace);

const combined = nums.concat(letters);
console.log(combined);


/* 
  Array.prototype.indexOf()
  
    Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
*/

// Returns index of given string
const arrIndexOf1 = letters.indexOf('d');
console.log(arrIndexOf1); // log: 3

// Returns index of given string, starting at given index.
const arrIndexOf2 = letters.indexOf('e', 3);
console.log(arrIndexOf2); // log: 4

// If string is not at given index or thereafter, it returns -1.
const arrIndexOf3 = letters.indexOf('e', 5);
console.log(arrIndexOf3); // log: -1


/* 
  Array.prototye.
*/