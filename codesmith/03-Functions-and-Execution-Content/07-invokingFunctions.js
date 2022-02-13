/**
 * Examine the code.
 * Try to make the calls variable equal to
 * 'JerryKramerGeorgeElaine' with only
 * a single invocatin to the function jerry().
 *-
 * @harryrf3 (2022-02-11T20:01:45.000-05:00)
 ***/

let calls = '';

function jerry(str) {
  str += 'Jerry';
  return kramer(str);
}

function george(str) {
  str += 'George';
  return elaine(str);
}

function elaine(str) {
  str += 'Elaine';
  return str;
}

function kramer(str) {
  str += 'Kramer';
  return george(str);
}

// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
