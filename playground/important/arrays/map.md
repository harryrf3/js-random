The **`map()`** method **creates a new array** populated with the results of calling a provided function on every element in the calling array.


## [Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#syntax "Permalink to Syntax")

```
// Arrow function
map((element) => { /* ... */ })
map((element, index) => { /* ... */ })
map((element, index, array) => { /* ... */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* ... */ })
map(function(element, index) { /* ... */ })
map(function(element, index, array){ /* ... */ })
map(function(element, index, array) { /* ... */ }, thisArg)
```



### [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#parameters "Permalink to Parameters")

`callbackFn`

Function that is called for every element of `arr`. Each time `callbackFn` executes, the returned value is added to `newArray`.

The function is called with the following arguments:

`element`

The current element being processed in the array.

`index`

The index of the current element being processed in the array.

`array`

The array `map` was called upon.

`thisArg`Optional

Value to use as `this` when executing `callbackFn`.

### [Return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#return_value "Permalink to Return value")

A new array with each element being the result of the callback function.

## [Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#description "Permalink to Description")

`map` calls a provided `callbackFn` function **once for each element** in an array, in order, and constructs a new array from the results. `callbackFn` is invoked only for indexes of the array which have assigned values (including [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

It is _not_ called for missing elements of the array; that is:

-   indexes that have never been set;
-   indexes which have been deleted.

### [When not to use map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#when_not_to_use_map "Permalink to When not to use map()")

Since `map` builds a new array, using it when you aren't using the returned array is an anti-pattern; use [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) or [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) instead.

You shouldn't be using `map` if:

-   you're not using the array it returns; and/or
-   you're not returning a value from the callback.

### [Parameters in Detail](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#parameters_in_detail "Permalink to Parameters in Detail")

`callbackFn` is invoked with three arguments: the value of the element, the index of the element, and the array object being mapped.

If a `thisArg` parameter is provided, it will be used as callback's `this` value. Otherwise, the value [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) will be used as its `this` value. The `this` value ultimately observable by `callbackFn` is determined according to [the usual rules for determining the `this` seen by a function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

`map` does not mutate the array on which it is called (although `callbackFn`, if invoked, may do so).

The range of elements processed by `map` is set before the first invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. If existing elements of the array are changed after the call to `map`, their value will be the value at the time `callbackFn` visits them. Elements that are deleted after the call to `map` begins and before being visited are not visited.

**Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

Due to the algorithm defined in the specification, if the array which `map` was called upon is sparse, resulting array will also be sparse keeping same indices blank.

## [Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#examples "Permalink to Examples")

### [Mapping an array of numbers to an array of square roots](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#mapping_an_array_of_numbers_to_an_array_of_square_roots "Permalink to Mapping an array of numbers to an array of square roots")

The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

```
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```



### [Using map to reformat objects in an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_to_reformat_objects_in_an_array "Permalink to Using map to reformat objects in an array")

The following code takes an array of objects and creates a new array containing the newly reformatted objects.

```
const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```



### [Mapping an array of numbers using a function containing an argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#mapping_an_array_of_numbers_using_a_function_containing_an_argument "Permalink to Mapping an array of numbers using a function containing an argument")

The following code shows how `map` works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as `map` loops through the original array.

```
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
```



### [Using map generically](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_generically "Permalink to Using map generically")

This example shows how to use map on a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) to get an array of bytes in the ASCII encoding representing the character values:

```
const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));

// charCodes now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```



### [Using map generically querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_generically_queryselectorall "Permalink to Using map generically querySelectorAll")

This example shows how to iterate through a collection of objects collected by `querySelectorAll`. This is because `querySelectorAll` returns a `NodeList` (which is a collection of objects).

In this case, we return all the selected `option`s' values on the screen:

```
const elems = document.querySelectorAll('select option:checked');
const values = Array.prototype.map.call(elems, ({ value }) => value);
```



An easier way would be the [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method.

### [Tricky use case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#tricky_use_case "Permalink to Tricky use case")

([inspired by this blog post](http://www.wirfs-brock.com/allen/posts/166))

It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors.

Consider:

```
['1', '2', '3'].map(parseInt);
```



While one might expect `[1, 2, 3]`, the actual result is `[1, NaN, NaN]`.

[`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) is often used with one argument, but takes two. The first is an expression and the second is the radix to the callback function, `Array.prototype.map` passes 3 arguments:

-   the element
-   the index
-   the array

The third argument is ignored by [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)—but _not_ the second one! This is the source of possible confusion.

Here is a concise example of the iteration steps:

```
// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration  (index is 0): */ parseInt("1", 0);  // 1
/*  second iteration (index is 1): */ parseInt("2", 1);  // NaN
/*  third iteration  (index is 2): */ parseInt("3", 2);  // NaN
```



Then let's talk about solutions.

```
const returnInt = (element) => parseInt(element, 10);

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map((str) => parseInt(str)); // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map((str) => parseInt(str)); // [1, 2, 3]
```



One alternative output of the map method being called with [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) as a parameter runs as follows:

```
const strings = ['10', '10', '10'];
const numbers = strings.map(parseInt);

console.log(numbers);
// Actual result of [10, NaN, 2] may be unexpected based on the above description.
```



### [Mapped array contains undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#mapped_array_contains_undefined "Permalink to Mapped array contains undefined")

When [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) or nothing is returned:

```
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
```