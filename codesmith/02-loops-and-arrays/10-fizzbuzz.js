/**
 * Use a Loop to iterate through numbers 1 - 16.
 * Push each number into fb
 * Push the string 'fizz' in place of numbers divisble by 3.
 * Push the string 'buzz' into place of numbers divisible by 5.
 * Push 'fizzbuzz' in place of numbers divisible by both 3 and 5.
 * Log fb to console.
 *
 * Hint: Check out the remainder/modulo operator: %
 *  The remainder operator (%) returns the remainder left over when
 *  one operand is divided by a second operand.
 *  It always takes the sign of the dividend.
 *-
 * @harryrf3 (2022-02-13T00:57:39.000-05:00)
 ***/
const fb = [];

for (let i = 1; i < 17; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.splice(i, 1, 'fizzbuzz');
    // fb.push('fizzbuzz');
  } else if (i % 3 === 0) {
    fb.splice(i, 1, 'fizz');
    // fb.push('fizz');
  } else if (i % 5 === 0) {
    fb.splice(i, 1, 'buzz');
    // fb.push('buzz');
  } else {
    fb.push(i);
  }
}
console.log(fb);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
