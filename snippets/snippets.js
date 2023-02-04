// import fetch from 'fetch';
// // Grab data from fetch input for daily challenges
// const summonPuzzleInput = async () => {
//   const response = await fetch('https://adventofcode.com/2022/day/2/input');
//   const responseText = await response.text(); // wait for a response
//   return responseText; // return that response
// };

// const puzzleInput = await summonPuzzleInput();

// console.log(puzzleInput);


// Capitalize the first letter of a word
const str = 'hello there';

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter(str));

// Capitalize all words of a string. 
function capitalizeWords (string) {
  return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};

console.log(capitalizeWords(str))

// Recursive Countdown

function countdown(n){
  if(n <= 0) {
    return []
  } else {
  const countArray = countdown(n - 1)
  countArray.unshift(n)
  return countArray
  }
}

console.log(countdown(10)); // log: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1