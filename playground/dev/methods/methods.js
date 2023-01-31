// Reverse an array from first to last index
const numbers = [22, 3, 48, 6, 98, 10];
const letters = ['a', 'b', 'c']
// const string = 'Hello, my name is Harry.'

// Needs more work to be able to pass strings

const reverseArray = (arr) => {
  // arr gets sliced at spaces between elements
  const sliced = arr.slice('');
  // sliced gets assigned to reversed and reverses the order
  const reversed = sliced.reverse();
  // reversed array gets returned
  return reversed;
}

console.log(reverseArray(numbers))
console.log(reverseArray(letters))
// console.log(reverseArray(string))


