/**
 * You are provided an object called checkObj
 * Using a for...in loop
 * Determine if the object contains the property foundNum
 * If true, reassign the value of found to 1
 *
 * NOTE: Research for... in (https://mzl.la/33kyRCC)
 * and Object.keys (https://mzl.la/34ZMZ4w) before
 * continuing with these challenges.
 *
 * * MDN:
 * * The for...in statement iterates over all enumerable properties of an object
 * * that are keyed by strings (ignoring ones keyed by Symbols),
 * * including inherited enumerable properties.
 *-
 * @harryrf3 (2022-02-14T22:23:34.000-05:00)
 ***/

 const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let found = 0;

// ADD CODE HERE

for (const property in checkObj) {

    // console.log('found');
    if (checkObj[property] = 'foundNum'){
      // console.log(checkObj[property]);
      found = 1;
      // console.log(`found: ${found}`)
    }
}

/**
Example Code:

 const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
***/
