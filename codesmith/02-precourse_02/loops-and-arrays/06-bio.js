const firstNames = ['Jon', 'Arya', 'Jamie'];
const lastNames = ['Snow', 'Stark', 'Lannister'];
const places = ['The Wall', 'Winterfell', 'Kings Landing'];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE

/*
 * forEach() Iteration order:
 *
 * For every time firstNames runs,
 * lastNames runs once,
 * places runs three times.
 * Until firstNames runs through complete array
 * -
 * @harryrf3
 **/
firstNames.forEach((element) => {
  // bios.push(`My name is ${element}`);
  bios.push(`1 firstNames`);
  //
  lastNames.forEach((element) => {
    // bios.push(` ${element}`);
    bios.push(`2 lastNames`);
    //
    places.forEach((element) => {
      // bios.push(`and I am from ${element}`);
      bios.push(element);
    });
  });
  console.log(bios);
});

console.log('done')