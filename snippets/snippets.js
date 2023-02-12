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

// console.log(capitalizeFirstLetter(str));

// Capitalize all words of a string. 
function capitalizeWords (string) {
  return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};

// console.log(capitalizeWords(str))

// Recursive Countdown

function countdown (n) {
  if (n <= 0) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// console.log(countdown(10)); // log: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


// Messing with arrays

// reverse an array
let arr = ['hello', 37, true, 'harry'];

const reverseArr = (arr) => {
  return arr.reverse();
};

// console.log(reverseArr(arr))


// Add to the beginning of an array

const shiftArr = (arr) => {
  arr.unshift('hey');
  return arr;
};

// console.log(shiftArr(arr))


// push to the end of an array

const pushArr = (arr) => {
  arr.push('another');
  return arr;
};

// console.log(pushArr(arr))


// pop from the end of an array

const popArr = (arr) => {
  arr.pop();
  return arr;
};

// console.log(popArr(arr))

// sum an array without negative numbers

const arrNums = [25, -1, 230, -2, -3];

const reduceArr = arrNums.reduce(
  (prev, curr) => (curr > 0 ? prev + curr : prev),
  0
);
// console.log(reduceArr);


// sum all numbers divisible by 2

const arrNumsAgain = [25, -1, 230, -2, -3, 15, 20, 2];

const sumDivByTwo = () => {
  return arrNumsAgain
    .filter(item => item % 2 === 0)
    .reduce((prev, curr) => prev + curr, 0);
};

// console.log(sumDivByTwo());

