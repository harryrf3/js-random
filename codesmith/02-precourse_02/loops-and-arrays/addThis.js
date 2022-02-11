/**
 * Updates addThis with sum of (sum + addThis)
 * Increments value of addThis
 * While addThis < 10
 *
 *-
 * @harryrf3 (2022-02-10T22:54:51.000-05:00)
 ***/

// ADD CODE HERE
let addThis = 0,
  sum = 0,
  consoleCount = 0;

while (addThis < 10) {
  sum += addThis;
  addThis++;
}
// Uncomment the line below to check your work!
console.log(sum);

/**
 * CONSOLE OUTPUT
 *
 * sum 0
 * addThis 1
 * -----------
 * sum 1
 * addThis 2
 * -----------
 * sum 3
 * addThis 3
 * -----------
 * sum 6
 * addThis 4
 * -----------
 * sum 10
 * addThis 5
 * -----------
 * sum 15
 * addThis 6
 * -----------
 * sum 21
 * addThis 7
 * -----------
 * sum 28
 * addThis 8
 * -----------
 * sum 36
 * addThis 9
 * -----------
 * sum 45
 * addThis 10
 * -----------
 ***/
