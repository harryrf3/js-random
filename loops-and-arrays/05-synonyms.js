const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array.
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
synonyms.forEach((element) => greetings.push(element));

// 2.
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
greetings.forEach((element) => console.log(element));
