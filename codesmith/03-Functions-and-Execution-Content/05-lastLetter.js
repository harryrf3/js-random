/**
 * Create a function 'lastLetter' that
 * takes a word (string) and returns
 * the last character/letter of that string.
 * 
 *-
 * @harryrf3 (2022-02-11T19:36:53.000-05:00)
 ***/

 function lastLetter(word) {
  return word[word.length - 1]; 
}

// Uncomment the lines below to test your code
console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"