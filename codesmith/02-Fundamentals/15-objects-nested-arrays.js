/**
 * You are provided with an empty array called nestedArr.
 * Using a for loop starting at index 0, add 5 subarrays to nestedArr,
 * with each nested array containing the string 'loop' concatenated
 * with the corresponding index in nestedArr as its first element,
 * and the index as its second element.
 *
 * Example of a subarray: ['loop3', 3]
 *
 *-
 * @harryrf3 (2022-02-22T02:44:32.000-05:00)
 ***/

const nestedArr = [];

for (let i = 0; i < 5; i++) {
  nestedArr.push(['loop' + i, i]);
}

console.log(nestedArr);
