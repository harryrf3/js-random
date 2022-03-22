/**
 * Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'.
 * If the key 'Waldo' is not found, the function should return 'Where's Waldo?'
 * -
 * @harryrf3 (2022-03-20T20:58:35.000-05:00)
 ***/

const findKey = function (obj, value) {
  value = Object.values(obj);
  let result;
  if (value = 'Suffix') { // checking for value seems incorrect
    result = obj[value];
  } else {
    result = 'Key not found!'
  }

  return result;
};

// const findKey = function (obj, value) {
//   const key = Object.entries(obj);
//   let result;
//   if (key == 'First') {
//     result = value;
//   }
//   console.log('Output:', key);
//   return result;
// }

const _Obj = { 'First': 'Harry', 'Last': 'Fahringer', 'Suffix': 'III' };
console.log(findKey(_Obj));