/**
 * You are provided with an empty array objToArray
 * Using a for...in loop, fill the array with
 * all of the numbers from checkObj if
 * they are greater than or equal to 2.
 *
 * * More info at bottom of file *
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

for (const property in checkObj) {
  console.log(checkObj[property])
  if (checkObj[property] >= 2) {
    objToArray.push(checkObj[property]);
  }
}

console.log(objToArray);

/**
 * Revisited this code after having more time to
 * research on Object's methods and utilizing
 * a for...in loop to enumerate its properties.
 *
 *-
 * @harryrf3 (2022-02-18T02:37:28.000-05:00)
 *
 ***/
