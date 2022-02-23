/**
 * Create a function makePlans that accepts a string.
 * This string should be a name.
 * The function makePlans should call the function callFriend and return the result.
 * callFriend accepts a boolean value and a string.
 * Pass in the friendsAvailable variable and name to callFriend.
 * Create a function callFriend that accepts a boolean value and a string.
 * If the boolean value is true, callFriend should return the string 'Plans made with NAME this weekend'.
 * Otherwise it should return 'Everyone is busy this weekend'.
 *
 *-
 * @harryrf3 (2022-02-22T21:02:35.000-05:00)
 ***/

 let friendsAvailable = true;

function makePlans(name) {
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  // console.log('*** firendsAvailable', bool);
  if (bool) {
    // console.log('*** IF', bool);
    return `Plans made with ${name} this weekend`;
  } 
    // console.log('*** ELSE', bool);
    return `Everyone is busy this weekend`;
}

// console.log(makePlans('Tom'));

console.log(makePlans('Mary')); // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans('James'));