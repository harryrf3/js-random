/**
 * You are given an object called sumMe containing several key/value pairs
 * and a variable called total whose initial value is 0.
 * Using a for... in loop, iterate through the keys of sumMe;
 * if the value corresponding to a key is a number, add it to total.
 *-
 * @harryrf3 (2022-02-22T20:33:33.000-05:00)
 ***/

const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!',
};

let total = 0;

for (const values in sumMe) {
  let objValues = sumMe[values];
  if (typeof objValues == 'number') {
    total += objValues;
    console.log('Value:', objValues);
  }
}
console.log('Total:', total);