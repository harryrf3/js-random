const nums = [23, 43, 943, 2, 9403, 2, 100, 29, 0, 1, 36];

const bubbleSort = (array) => {
  const arr = Array.from(array);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
};



console.log(bubbleSort(nums))