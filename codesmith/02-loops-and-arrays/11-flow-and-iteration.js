/**
 * Iterate through the array and multiply
 * a number by 10 if it is greater than
 * or equal to 5.
 *-
 * @harryrf3 (2022-02-14T17:03:37.000-05:00)
 ***/

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

// ADD CODE HERE
for (let i = 0; i < timesTenIfOverFive.length; i++) {
  /* if current index of array >= 5 */
  if (timesTenIfOverFive[i] >= 5) {
    /* modify value of _i_ by removing that _1_ value
    and replacing with multiple of current index (timesTenIfOverFive[i]) by 10 */
    timesTenIfOverFive.splice(i, 1, timesTenIfOverFive[i] * 10);
  }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

