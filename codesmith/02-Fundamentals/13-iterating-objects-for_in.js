/**
 * You are provided with an empty array objToArray
 * Using a for...in loop, fill the array with
 * all of the numbers from checkObj if
 * they are greater than or equal to 2.
 *-
 * @harryrf3 (2022-02-15T08:16:57.000-05:00)
 ***/

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

const objToArray = [];
// ADD CODE HERE
for (const property in checkObj) {
  if (checkObj[property] >= 2) {
    objToArray.push(checkObj[property]);
  }
}

console.log(objToArray);
