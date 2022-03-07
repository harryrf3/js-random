/**
 * function parseInt(string: string, radix?: number): number
 * -
 * Converts a string to an integer.
 * @param string - A string to convert into a number.
 * @param radix - A value between 2 and 36 that specifies the base of the number in string.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
 * All other strings are considered decimal.
 * -
 * Errors I've encountered:
 * - Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
 * -
 * @harryrf3 (2022-03-07T00:11:04.000-05:00)
 ***/

// Not sure of a use-case.
console.log(parseInt(0xFF3300, 32)); // expect: 41039305830
// Not sure of a use-case either, but its interesting.
console.log(parseInt(0xFF3300, parseFloat(24, 32))); // expect: 5789550606
// (16) 1's
console.log(parseInt(1111111111111111)); // expect: 1111111111111111
// (22) 1's and 0's
console.log(parseInt(1010100011100010111011, 2)); // expect: 1
// (22) 0's + 1
console.log(parseInt(0000000000000000000001, 2)); // expect: 1
// (22) Random 1's and 0's
console.log(parseInt(1010101010101010101010)); // expect: 1

/**
 * function parseFloat(string: string): number
 * -
 * Converts a string to a floating-point number.
 * @param string — A string that contains a floating-point number.
 * -
 * @harryrf3 (2022-03-07T00:18:28.000-05:00)
 ***/

 // (15) 9's
console.log(parseFloat(1.999999999999999)); // expect: 1.999999999999999

// (16) 9's
console.log(parseFloat(1.9999999999999999)); // expect: 2