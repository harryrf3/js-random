/*
  Create a function prioritize that accepts an array and a callback. 
  The callback will return either true or false. 
  prioritize will iterate through the array and perform the callback on each element, 
  and return a new array, where all the elements that yielded a return value 
  of true come first in the array, and the rest of the elements come second.
*/

// 2023
// ADD CODE HERE
const prioritize = (arr, callback) => {
  let result = []
  let temp = []
  for (let i = 0; i < arr.length; i++) {
  	if (callback(arr[i])) {
      result.push(arr[i])
    } else {
      temp.push(arr[i])
    }
  }
  return result.concat(temp)
}
// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
