/* 
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  const split = str.split(' ')
  let longest = 0
  for (const el of split) {
    // check length of every element
    if (el.length > longest) {
      longest = el.length
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")