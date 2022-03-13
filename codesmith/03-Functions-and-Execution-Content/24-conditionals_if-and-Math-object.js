/**
 *  Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments.
 * The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number
 * -
 * Note: Due to the output being based off of a random factor,
 * the tests provided below cannot determine if you have solved the prompt exactly.
 * The test cases for this challenge check for the correct data types only.
 * 
 * -
 * @harryrf3 (2022-03-10T21:05:20.000-05:00)
 ***/


function closestToTheMark (player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);

  // find absolute value of player1 entry and theMark random number
  let player1Absolute = Math.abs(player1 - theMark);

  // if absolute value is lesser than player1 input, player1 is the closest
  if (player1Absolute < player1) {
    return 'Player 1 is the closest';
  } else {
    return 'Player 2 is the closest';
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));