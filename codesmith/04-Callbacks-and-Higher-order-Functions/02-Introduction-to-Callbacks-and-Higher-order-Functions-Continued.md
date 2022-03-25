## Introduction to Callbacks and Higher Order Functions Continued (Reading Material)


Now let's dive in and learn a little more about Callbacks
Object-oriented programming was the most prominent programming paradigm for 25-30 years, but functional programming has taken the lead over the last 5-7 years. As Zoolander's Mugatu would say, "It's so hot right now."

The reason for its rise is clear -- as applications grow in complexity, functional programming gives developers the ability to deliver intuitive, stateless, side-effect free code, greatly streamlining their development process and improving their applications.

Callbacks and higher-order functions are at the heart of functional programming, and they're an essential part of a JavaScript developer's toolbox. Let's explore these concepts together from the ground up.

### Definitions
If you type “callback” into Google search, you'll see the first definition as “an invitation to return for a second audition or interview.” That’s definitely not the kind of callback we’re discussing here!

In JavaScript, a **callback** is a function that is passed as an argument to another function. If that doesn’t make sense yet, don’t worry -- we’ll break it down soon.

And what about **higher-order functions**? A Google search reveals an accurate description - “a function that takes at least one function as input and/or returns a function as output.”

Hmm...Let’s see a code example to clarify -

<br/>

```js
const array = [1, 2, 3];

function update(callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const updated = callback(array[i]);
    output.push(updated);
  }

  return output;
}

// Callback functions
function add10(num) {
  return num + 10;
}

function multiplyBy20(num) {
  return num * 20;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function
update(add10) // returns [11, 12, 13]
update(multiplyBy20) // returns [20, 40, 60]
update(stringify) // returns [‘1’, ‘2’, ‘3’]
```

<br/>

So we have two function definitions, and we're executing update with add10 as input. One of these functions is the callback, and one of them is the higher-order function. Can you guess which one is which?

Spoiler alert - the callback is add10, and the higher-order function is update!

Why is add10 the callback? It satisfies these two conditions -

- It is used as input in another function call.
- It is called inside of the other function.

Why is 'update' the higher-order function? It satisfies these two conditions -

- It takes a function as an argument.
- It calls its input function when it is called. Hence, the term "callback" as one function call leads to another.

So basically, higher-order functions have callbacks as inputs and call those callbacks somewhere in their definition.

To clarify, although we may call a function a “callback” or a “higher-order function”, they are both just normal JavaScript functions. Nothing special about them except the terminology we use to describe them.

### When Do You Use This Stuff
As fundamental building blocks in JavaScript, callbacks and higher-order functions are used in almost every web application. They solve a general set of code duplication problems.

Let’s start thinking about those problems. We’ll build up our understanding through a series of questions that highlight how we can write cleaner, more powerful code with callbacks and higher-order functions.

### The Questions Begin
Let's say you are tasked with manipulating an array of numbers, such as stock prices. You begin by testing your skills on a small array to see if you can simply add 10 to each integer.

You might write some code that looks like this -

<br/>

```js
const array = [1, 2, 3];
const output = [];

for (let i = 0; i < array.length; i++) {
  const updated = array[i] + 10;
  output.push(updated);
}

console.log(output); // prints [11, 12, 13]
```

<br/>

If that were the only addition operation you needed to perform in your application, then this code is absolutely fine. However, you realize you need to add other values, too. How would you write new code to add other values, like 20, to each number?

Welp… looks like we’ll have to copy/paste the entire code block just to make one change -

<br/>

```js
const array = [1, 2, 3];
const output = [];

for (let i = 0; i < array.length; i++) {
  const updated = array[i] + 20;
  output.push(updated);
}

console.log(output); // prints [21, 22, 23]
```

<br/>

It feels dirty to repeat so much code for such a small change. And it’s inefficient because we have to store all this duplicated code in memory.

You may have heard of the DRY principle (Don’t Repeat Yourself). This code breaks that principle. In colloquial terms, it’s not DRY code.

### For Every Problem, There Is A Solution
How can we solve this repetition problem? In other words, how do we abstract away the code that doesn’t change? Think about this deeply, then keep reading.

-- Stop here if you are just starting to think deeply --

-- If you haven’t thought deeply, you shouldn’t be reading this. Think deeply then come back!--

-- Start here when you’re done thinking deeply --

Time for the answer -- Any time we notice we are writing code that repeats except for one small part, we turn it into a function! The function body will contain the repetitive code block, and its parameter will replace the one thing we want to change. For example, if we want to change the number we’re adding, just replace all instances of that number with the parameter num.

<br/>

```js
const array = [1, 2, 3];

function addNum(num) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const updated = array[i] + num;
    output.push(updated);
  }

  return output;
}

console.log(addNum(10)); // prints [11, 12, 13]
console.log(addNum(20)); // prints [21, 22, 23]
```

<br/>

How great is that! Instead of having to copy/paste the same code block over and over and over every time we want to change the number added, we just write one function. Now we can call that function with any number as input and get the appropriate output.

In other words, when we create our functions with parameters like this, we have no idea which number will be added in the future. Think about how cool that is... we are delivering a function that will calculate any possible addition you could throw at it… and all we did was abstract away one number!

This is incredibly useful if you need to frequently transform array elements using addition in your applications.

### One Step Further
Thinking about our stock prices example, if all we needed to do was add values to the prices, then we could clap our hands and go home -- we would have all the functionality we need. Hooray!

But what if we wanted to perform other operations, like subtraction or more complex manipulation? Functions cannot take operators (like + and -) as parameters, so that's one limiting factor. But more importantly, we can't deliver custom functionality through simple value substitution.

If only we could use other functions as parameters to deliver custom functionality inside our function... oh wait, we can!

### First-Class Citizens To The Rescue
In JavaScript, functions are first-class citizens. This means that functions can be passed as input to other functions (as well as returned from other functions, modified, and assigned to variables). This gives developers the ability to use functions as parameters, which we refer to as **callbacks**.

So how could we perform more complex calculations in our stock prices example? Well, if a number parameter allows us to use any number (like 10 or 20), then a function parameter allows us to use any functionality (like adding, subtracting, or more complex manipulation)!

That’s hard to visualize without a concrete example. So, here’s a concrete example. Notice how the **updated** variable has changed and we can apply three different functions to the array quite easily -

<br/>

```js
const array = [1, 2, 3];

function update(callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const updated = callback(array[i]);
    output.push(updated);
  }

  return output;
}

// Callback functions
function add10(num) {
  return num + 10;
}

function multiplyBy20(num) {
  return num * 20;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function
update(add10) // returns [11, 12, 13]
update(multiplyBy20) // returns [20, 40, 60]
update(stringify) // returns [‘1’, ‘2’, ‘3’]
```

<br/>

Compared to our previous example, we still changed the same variable, updated. Instead of using the ‘+’ operator and a number parameter, we replaced that code with a function call to the array element. This small change now allows us to use *any* function, referred to as a **callback**, when we run the update function!

This makes **update** a higher-order function because it now takes a callback as input. In fact, I’ve been hiding a secret from you this whole time… this update function is essentially the built-in **map** function in JavaScript!

Given a callback, **map** will output a new array where each element is the output of a call to the callback. It provides us a powerful tool to transform arrays, and we control the transformation through callbacks.

### Wrapping Up
Let’s summarize what we’ve discussed in this article.

- Callbacks are functions that are passed as input to other functions.
- Higher-order functions take at least one function as input (and/or return a function, although we haven’t dug into that aspect of them in this article. You can learn more about that in our post on Closures!)
- Functions give us the power to use the same code without copy/pasting it. We insert parameters where we’d like control over changing values.- 
- Higher-order functions provide an additional layer of abstraction, using callbacks as parameters to control functionality instead of simple values. The built-in map function is one example of an incredibly useful higher-order function that transforms arrays with callbacks.