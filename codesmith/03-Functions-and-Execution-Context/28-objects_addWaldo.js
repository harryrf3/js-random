/**
 * Create a function addWaldo that accepts an object with keys being first names and values being last names.
 * For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'})
 * should add the key 'Waldo' with the value 'unknown' to the object
 * and return the mutated object.
 * -
 * @harryrf3 (2022-03-20T20:29:41.000-05:00)
 ***/


// ADD CODE HERE 
const addWaldo = function (obj) {
  // can also use dot notation, (e.g. obj.Waldo = 'unknown',) this is not very modular, imo.
  // obj.Waldo_dot = 'unknown'; // using dot notation

  // using bracket notation makes the code more modular as both key and value can be read from a variable (e.g. obj[key] = value)
  obj['Waldo'] = 'unknown'; // using bracket notation
  return obj;
};

// Uncomment these to check your work!
const siliconValley = { 'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle' };
console.log(addWaldo(siliconValley)); // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }