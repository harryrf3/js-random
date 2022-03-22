/**
 * Complete the function holidays that accepts an array of strings and iterates through the array.
 * If the array contains the string "October", return "Happy Halloween".
 * Otherwise, return the string "Have a great day!".
 * Do not use a variable to store the result that you are returning
 *-
 * @harryrf3 (2022-03-01T20:18:09.000-05:00)
 ***/

function holidays(arr) {
  // Do not use a variable to store your result 
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'October') {
      return 'Happy Halloween';
    }
  }
  return 'Have a great day!';
}
// Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"