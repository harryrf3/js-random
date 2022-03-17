/**
 * Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1.
 * Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
 * 
 * BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
 * -
 * @harryrf3 (2022-03-17T07:48:03.000-05:00)
 ***/


function addingAllTheWeirdStuff (array1, array2) {
    // The sum of all ODD numbers in array2
      // Add to each element UNDER 10 in array1

    // The sum of all EVEN numbers in array2.
      // Add to those OVER 10 in array1

    // Any element in array2 < 20
      // Add 1 to every element in array1
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
