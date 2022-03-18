/**
 * Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1.
 * Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
 * 
 * BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
 * -
 * @harryrf3 (2022-03-17T07:48:03.000-05:00)
 ***/

function addingAllTheWeirdStuff (array1, array2) {
  // Filter all odd numbers
  const oddNumbers = array2.filter((item) => {
    return [item] % 2 !== 0;
  });

  // Filter all even numbers
  const evenNumbers = array2.filter((item) => {
    return [item] % 2 === 0;

  });

  // Filter all numbers greater than 20
  const greaterThan20 = array2.filter((item) => {
    return [item] > 20;
  });

  if (oddNumbers) {
    // Add the sum of all odd numbers in array2 to each element < 10 in array1
    // 
    console.log('ODD:', oddNumbers);
  }

  if (evenNumbers) {
    // Add the sum of all even numbers in array2 to each element > 10 in array1
    // 
    console.log('EVEN:', evenNumbers);
  }

  if (greaterThan20) {
    // Any element in array2 > 20, add 1 to every element in array1.
    // 
    console.log('> 20:', greaterThan20);
  }
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
