# CodeSmith Challenge - union:

## Instructions:
* Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements.  
* If there are duplicate elements, only add it once to the new array. 
* Preserve the order of the elements starting from the first element of the first input array. 
* BONUS - Use reduce!

<br/>

### Base Challenge Text:
```js
// ADD CODE HERE

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
```

<br/>


<br/>

### Solution:
```js
// ADD CODE HERE
function union (input) {
  // use reduce to iterate through outer array of arrays (return eval'd result)
  return input.reduce((outputArr, currentArr) => {
    // iterate thru each inner arr to access each element
    currentArr.forEach(el => {
      // if element is not present in output
      if (!outputArr.includes(el)) outputArr.push(el)// add element to output
    });
    // return output
    return outputArr;
  }, []); // init empty arr
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

```

<br/>

### Breakdown:
```js
// use reduce to iterate through outer array of arrays, then return the operation's result
return input.reduce((outputArray, currentArray) => { ... }, []);
```
Reduce gives a clean syntax to use when iterating through an array and keeps track of the accumulated value(s). 

In this case we are using `outputArray` to contain all the unique elements.

The `union` function is returning the computed value of the reduce method.

```js
// init empty arr, to be the output
```
An empty array is passed in as the second argument to the reduce method. i,e. `reduce(outputArr, currentArr, { ... }, **[]**);` and is used to store all the accumulated values in an array.

This array of accumulated values is returned at the end of reduce's operation.

```js
// iterate thru each inner arr to access unique elements
```
Once inside the callback function aka, the reducer function, we are going to iterate through each inner array to access each one of the individual elements of the nested arrays.

```js
// if element is not present in output
// add element to output
```
Once we have access to the individual element:

We check to see if the element currently stored in currentArray **is not** present in the output array.

Once the tests are passed, we push that item into the output array. `if (!outputArr.includes(el)) outputArr.push(el)`

```js
// return output array
```
Return the accumulated values `return outputArr` which results to `[5, 10, 15, 88, 1, 7, 100]`

<br/>

## Conclusion:

Reduce was a frustrating method for me to learn. It seems so simple, yet it is so complex and powerful.

If one could see my code history for this challenge, they would see that I've tried methods such as `Array.prototype.flat()` and `Array.prototype.slice()`.

My line of thinking was that if I were to pass in the first array (which is in the expected result), check that each element of the existing arrays are not already present, add the ones that result to true to the output array.

I still believe it can be done this way, but just because it can be done, doesn't mean it's the right way, nor the least taxing way of getting it done.

Before looking at the solution for this challenge, I had a good understanding of what the reduce function did in terms of functionality, where I was lacking was how to implement those terms.

I suffer from needing to learn how to teach myself how to do something. I need to understand just enough to start explaining to myself, ask questions, then a lot of concepts start to fall into place. It's really twice the work, to be honest.