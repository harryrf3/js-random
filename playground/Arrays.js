/**
 * Practicing Array Methods
 * ------------------------
 * Quokka.js Instructions:
 * Use CTRL + K, Q to see instant results.
 *-
 * @harryrf3 (2022-03-04T23:20:32.000-05:00)
 ***/

// Array.prototype.fill('test');

const arr1 = [1, 2, 3, 23, 23, 324, 324];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

/*
  Array.prototype.fill() 
    Changes all array elements from start to end index to a static value and returns the modified array
*/

// Replaces indicies 0 thru 3 with replaced
arr1.fill('replaced', 0, 3);
arr1;

let combined = arr1.concat(arr2);
combined;
// console.table(combined);

/* 
  Array.prototype.indexOf
    Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
 */

  const indexOf = arr2.indexOf('d');
indexOf;