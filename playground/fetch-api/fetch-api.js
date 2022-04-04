/**
 * Fetch API (MDN)
 * -
 * Sytax:
 * fetch(resource [, init])
 * -
 * See fetch-api.md for more info
 * -
 * @harryrf3 (2022-04-03T21:48:38.000-05:00)
 ***/
const api = 'https://reqres.in/api/users' // test using a array
const res = fetch(api)
  .then(res => res.json(res))
  .then(data => console.log(data));