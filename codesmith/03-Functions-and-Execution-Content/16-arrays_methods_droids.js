/**
 * Recreate the function droids from the previous challenge,
 * but instead of using a FOR loop, use the built-in forEach method.
 *-
 * @harryrf3 (2022-03-01T17:56:28.000-05:00)
 ***/

function droids(arr) {
  let result = '';
  const droidsFound = 'Found Droids!',
  droidsNotFound = 'These are not the droids you\'re looking for.';
  // ADD CODE HERE
  arr.forEach(element => {
    arr.includes('Droids') ? result = droidsFound : result = droidsNotFound;
  });
  return result;
}

// Uncomment these to check your work! 
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) //should log: "These are not the droids you're looking for."