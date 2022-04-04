# Fetch API

*A quick explanation from Kyle @ Web Dev Simplified, paraphrased by @harryrf3*

We are going to be using the Fetch API:
```js
// syntax: fetch(resource [, init])
fetch('https://reqres.in/api')

// request all users
fetch('https://reqres.in/api/users')

// request single user
fetch('https://reqres.in/api/users/1')
```

The Fetch API has two parameters - `resource` and `options [optional]`

- `resource` - Takes a **url** `'https://reqres.in/api'`
- `options` - `[Optional]`
  - POST, etc.

`fetch()` is **Promise** based, so we can use the `async/await`, `.then()`, and `.catch()` methods.

`fetch()` will return a **response**, that we can process with `then()` and `catch()`.

We can use `.then()` to parse that **response**.

<br/>

```js
fetch('https://reqres.in/api/users')
  .then(res => console.log(res))
```

<br/>


