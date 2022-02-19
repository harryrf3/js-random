const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE

/*
 * This for loop iterates over increaseByTwo array
 * and adds 2 to each index
 * Then returns new values in console.
 * 
 * NOTE: The current double usage of increaseByTwo++ violates 'DRY' concept.
 *-
 * @harryrf3
**/
for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i]++;
  increaseByTwo[i]++;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];
