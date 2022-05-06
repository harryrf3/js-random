const obj = {
  member: {
    0: {
      first: "Harry",
      last: "Fahringer",
      suffix: "III",
      age: 36
    },
    1: {
      first: "John",
      last: "Awesome",
      suffix: null,
      age: 28
    },
    2: {
      first: "Jane",
      last: "Awesome",
      suffix: null,
      age: 42
    },
    3: {
      first: "Cedric",
      last: "The Cat",
      suffix: null,
      age: 10
    },
  }
} // * obj.member.[0-3].[first, last, suffix, age]

const objToArray = Object.entries(obj);

// objToArray.reduce((index, element) => {
//   console.log()
// }, 0)

// for (let element of objToArray) {
  
// }
