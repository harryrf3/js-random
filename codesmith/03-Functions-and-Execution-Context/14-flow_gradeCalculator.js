/**
 * Create a function gradeCalculator which takes a grade (number)
 * and returns its letter grade.
 *
 * grades 90 and above should return "A"
 *
 * grades 80 to 89 should return "B"
 *
 * grades 70 to 79 should return "C"
 *
 * grades 60 to 69 should return "D"
 *
 * 59 and below should return "F"
 * * default return
 *-
 * @harryrf3 (2022-02-24T23:26:19.000-05:00)
 ***/

function gradeCalculator(grade) {
  // I really didn't want to use conditionals...
  if (grade < 59) {
    return 'F';
  } else if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  }
  // we used to also have 'E' in our school system 'e' for 'erroneous',
  // 'f' for 'failure to complete'.
  return 'F';
}

// Uncomment the lines below to test your code
console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"
