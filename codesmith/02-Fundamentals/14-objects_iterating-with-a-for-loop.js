/**
 * Use the Object.value() method to return an array of checkObj's values
 * Assign this array to a const called objToArray
 * Use a for loop to iterate through objToArray
 * Determine if any numbers are divisible by 6
 * If true, reassign the value of divBy6 to true.
 *-
 * @harryrf3 (2022-02-18T22:20:25.000-05:00)
 ***/

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let divBy6 = false;

let objToArray = Object.values(checkObj);

// console.log('VALUES:', objToArray);

for (let i = 0; i < objToArray.length; i++) {
  // console.log(objToArray[i]);
  if (objToArray[i] % 6) {
    divBy6 = true;
  }
}

console.log('divBy6 =', divBy6);