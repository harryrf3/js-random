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

    Syntax:
    
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

    Syntax:

    copyWithin(target, [start], [end])
*/

const arrCopyWithin1 = letters.copyWithin(1, 3, 6);
console.log(arrCopyWithin1);


/*
  Array.prototype.entries()

    The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
  
    Syntax:

    entries()
*/

const arrEntries = nums.entries();
console.log(arrEntries);
console.log(arrEntries.next());
console.log(arrEntries.next().value);


/*
  Array.prototype.every()

    The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

    Syntax:

    // Arrow function
    every((element, [index], [array]) => { ... } )

    // Callback function
    every(callbackFn, [thisArg])

    // Inline callback function
    every(function(element, [index], [array]) {  ...  }, [thisArg])
*/

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
const result = array1.every(isBelowThreshold);
console.log(result);
// log: true


/*
  Array.prototype.fill() 

    Changes all array elements from start to end index to a static value and returns the modified array

    Syntax:
    
    fill(value, [start], [end])
*/

// Replaces indicies 0 thru 3 with 'replaced'
const arrReplace = nums.fill('replaced', 4, 6);
console.log(arrReplace);


/*
  Array.prototype.filter()

    The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    Syntax:

    // Arrow function
    filter((element, index, array) => { ... } )

    // Callback function
    filter(callbackFn, [thisArg])

    // Inline callback function
    filter(function(element, index, array) { ... }, [thisArg])
*/

// Filter out anything greater than integer
const arrFilter = nums.filter(element => {
  return [element] > 50;
});
console.log(arrFilter);


/*
  Array.prototype.find()

    The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

    Syntax:

    // Arrow function
    find((element, index, array) => { ... } )

    // Callback function
    find(callbackFn, [thisArg])

    // Inline callback function
    find(function(element, index, array) { ... }, [thisArg])
*/

// Finds next element in array greater than integer
const arrFind = nums.find(element => element > 20);
console.log(arrFind);


/*
  Array.prototype.findIndex()

    The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
*/

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