## Callbacks and Higher-order Functions (NOTES)


Callbacks and Higher-order functions are core principles in the functional programming paradigm in JavaScript.

Functions like  `map`, `filter`, and `reduce` are used everyday in a professional environment.

In this course we are going to go deep into understaning how to build these funcitons out from scratch in order that we develop an intuition of how they work so we can, write them better, debug them better, and deploy them better in our own professional development careers.

Beginning with a metaphor:

<br/>

```js
function tenSquared() {
  return 10 * 10;
}
// result: 100

function nineSquared() {
  return 9 * 9;
}
// result: 81

function twentyThreeSquared() {
  return 23 * 23;
}
// result: 529
```

<br/>

The above code proves to be pretty useless since it's not reusable and must be rewritten each time you want to make a different calculation.

This can be fixed by simply *generalizing* the way the function is written.

<br/>

```js
function sqaureNum(num) {
  return num * num;
}

squareNum(10); // 100
squareNum(9); // 81
squareNum(23); // 529
squareNum(6); // 36
```

<br/>

The function can now be utilized over and over again without the need to change anything other than the parameters.

<br/>

> Now we're only deciding what data to apply our multiplication functionality to when we *run* our function, not when we *define* it.
>
> We're going to see later on that our higher order functions folow this same principle - that we may not want to decide exactly what our *functionality* is until we run our function.

<br/>

Now suppose we have a function copyArrayAndMultiplyBy2. Let's diagram it out:

<br/>

```js
function copyArrayAndMultiplyBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
let result = copyArrayAndMultiplyBy2(myArray);
```

<br/>

<br/>

> ## Execution Context
> - Create a function called copyArrayAndMultiplyBy2
> - Assign the value of myArray to the functions parameter 'array'
> - Create variable 'output' and assign it an empty array
> - Begin for loop
>   - Create variable 'i' and set it to '0'
>   - If 'i' is lesser than length of array
>   - Increment 'i' and run inner context
>     - Take value at index '0' [1], multiply it by two and push it into 'output' array.
>     - Continue until 'i' is not longer lesser than length of array.
>     - Exit loop
> - Return output and exit function
> - Assign context to result variable
 
<br/>

Now what if we want to copy array and divide by 2? The execution context will be radically different (insert satire emoji here).

We're going to go through the execution context to *feel* just how *different* it is from `copyArrayAndMultiplyBy2`.

There may be more that look just like this. We're going to *feel the pain*, because with this comes understanding of why there may be a better way.

<br/>

```js
function copyArrayAndDivideBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] /2);
  }
  return output;
}

const myArray = [1, 2, 3];
let result = copyArrayAndDivideBy2(myArray);
```

<br/>


<br/>

> ## Execution Context:
> - ### **Global Execution Context**:
> - Declare a new function called `copyArrayAndDivideBy2`
> - Declare a *global* variable called `myArray` with the value of `[1, 2, 3]`
> - Declare a *global* variable called `result` and set it to `undefined` until we invoke the function `copyArrayAndDivideBy2`.
>   - ### **Local Execution Context**:
>   - Set the parameter `array` to `[1, 2, 3]`
>   - Create a *local* variable `output` and set it to an empty array
>   - Start `for loop`:
>     - `i = 0: [1]`
>     - `1 / 2 = 0.5`
>     - Push `0.5` into `output` array
>     - `i = 1: [2]`
>     - `2 / 2 = 0`
>     - Push `0` into `output` array
>     - `i = 2: [3]`
>     - `3 / 2 = 1.5`
>     - Push `1.5` into `output` array
>     - `i` is no longer lesser than `array.length`
>   - Exit `for loop`
> - Return output
<br/>

Even though I explained the second function in a more contextual matter, there is not much difference between these two functions.

When looking below at `copyArrayAndAdd3` we can see not much is changing in the way of functionality.

<br/>

```js
function copyArrayAndAdd3(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}

const myArray = [1, 2, 3];
let result = copyArrayAndAdd3(myArray);
```

<br/>

We are constantly repeating ourselves and rewriting the same code over again. Doing such goes against the DRY principle.

We can generalize our functions more instead of building out the same functions over and over.

We can consolidate the main functionality of all the above functions into a new higher-order function called `copyArrayAndManipulate()` and pass in a smaller callback function as a parameter.

Because we can't attempt to pass in `+ 3` as a parameter for `copyArrayAndManipulate(array)` we need a smaller function such as `plusThree(num)`, which can be further abstracted to `plusThree(num)`, which I would guess can be even further abstracted to `plusThree(elementsToAdd)` to be allowed to accept strings, numbers, arrays, etc.

I would argue that we can reduce the `plusThree()` function all the way down to an `add()` function where we are not bound by *how much* we add, nor by *which type* we add. But I'm going beyond what this video is trying to teach.


<br/>

> We could generalize our function so that we pass in our specific instruction only when we run the `copyArrayAndManipulate` function.

<br/>


<br/>

```js
function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

<br/>


<br/>

> ## Line by Line:
>> *Each level of nesting is a new execution context within memory.*
> - ### **Global Memory**:
> - Declare function `copyArrayAndManipulate(array, instructions)`
> - Declare function `multiplyBy2(input)`
> - Declare variable `result` (remains undefined until `copyArrayAndManipulate(array, instructions)` returns a value)
>   - copyArrayAndManipulate(array, instructions):
>     - ### **Local Memory**:
>     - `array: [1, 2, 3]`
>     - `instructions: multiplyBy2(input) {...}`
>     - `ouput: []`
>     - for loop:
>       - `array[i]: 0`
>         - `instructions: multiplyBy2(input)`
>           - `input: 1`
>             - `input * 2: 2`
>
>   - `output: [2]`
>     - for loop:
>       - `array[i]: 1`
>         - `instructions: multiplyBy2(input)`
>           - `input: 2`
>             - `input * 2: 4`
>
>   - `output: [2, 4]`
>     - for loop:
>       - `array[i]: 2`
>         - `instructions: multiplyBy2(input)`
>           - `input: 3`
>             - `input * 2: 6`
>   - `output: [2, 4, 6]`
> - `return: result`
>

<br/>

In creating `copyArrayAndManipulate()` we now have the ability to allow the manipulation to be *dynamic*. The level of abstraction this creates allows `copyArrayAndManipulate` to have only one job while also allowing callback functions to be passed in to dynamically manipulate the input without the higher-order function needing to care about what that manipulation is.


<br/>

> ## How was this possible?
> *Functions in javascript = first-class objects*
>
> They can co-exist with and can be treated like any other object
>   1. assigned to variables and properties (methods) of other objects
>   2. passed as arguments into functions
>   3. returned as values from functions
>     - We will see in the future this gives us the concept of closure

<br/>

Even though functions are objects, functions have one special property that objects do not have; they can be invoked.


<br/>

> ## Callback Vs. Higher-order Functions
>
>```js
>function copyArrayAndManipulate(array, instructions) {
>  let output = [];
>  for (let i = 0; i < array.length; i++) {
>    output.push(instructions(array[i]));
>  }
>  return output;
>}
>
>function multiplyBy2(input) {
>  return input * 2;
>}
>
>const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
>```
>
> The function we pass in is a *callback* function
> The *outer* function that takes in the function (callback) is the higher-order function
<br/>

<br/>

> ## Higher-order Functions
>
> Takes in a function or passes out a function
>
> Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently

<br/>

Callbacks and higher-order functions simplify our code and keep it DRY.

We no longer have to create `copyArrayAndMultiplyBy2`, `copyArrayAndAdd3`, `copyArrayAndDivideBy2`, because we now have a higher-order function `copyArrayAndManipulate` which has a placeholder for a callback function.

Calbacks and higher-order functions do something even more powerful; They allow us to run asynchronous code. We will see more on this later on.