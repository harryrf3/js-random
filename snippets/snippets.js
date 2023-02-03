import fetch from 'fetch';
// Grab data from fetch input for daily challenges
const summonPuzzleInput = async () => {
  const response = await fetch('https://adventofcode.com/2022/day/2/input');
  const responseText = await response.text(); // wait for a response
  return responseText; // return that response
};

const puzzleInput = await summonPuzzleInput();

console.log(puzzleInput);


// Capitalize the first letter of a word
const str = 'hello';

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter(str));