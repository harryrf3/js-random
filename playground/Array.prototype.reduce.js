/**
 *The function `reduce` takes an array and reduces the elements to a single value.
 *
 * The `reduce` function loops through the array and applies _any operation_ that you can put into a function to each element in the array while keeping track of the outcome of each loop. 
 * 
 * In this way, we could use `reduce` to do things like sum all the numbers in an array or multiply them all together.
 * 
 * @params func((accumulator, currentItem, [index], [array])), startingPoint)
 * 
 * reduce((total, item, [index], [array]) => {...}, 0)
 * -
 * @harryrf3 (2022-03-28T18:04:49.000-05:00)
 ***/

const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 },
];

// let totalPrice = 0;
// items.forEach(item => {
//   totalPrice += item.price;
// });

// Reduces all items in array down to one single value
const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(totalPrice);

/* Group people by age */

const people = [
  { name: "Harry", age: 36 },
  { name: "Desireé", age: 37 },
  { name: "John", age: 36 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
  { name: "Paul", age: 26 },
];

const peopleByAge = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});

console.log(peopleByAge);

/* Sum of all numbers */

const numbers = [13, 2, 5]

const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log(sum);

