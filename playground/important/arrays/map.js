/*
  Array.prototype.map()

  The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


*/

const numbers = [1, 2, 3, 23, 23, 324, 231];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const lorem = ['Lorem', 'Ipsum', 'lorem', 'ipsum', 'LOREM', 'IPSUM'];
const people = [
  { name: "Harry", age: 36 },
  { name: "Desireé", age: 37 },
  { name: "Paul", age: 32 },
  { name: "George", age: 19 },
  { name: "Vanessa", age: 32 }
];


const arrMap = numbers.map((element) => { element; });
console.log(arrMap);

const reformattedArray = people.map(({ name, age }) => ({ [name]: age }));
console.log(reformattedArray);

const doubles = numbers.map((num) => num * 2);
console.log(doubles);