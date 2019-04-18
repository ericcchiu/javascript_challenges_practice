/*
* Given a length (number) and an array of strings, return all strings that are greater than or equal to the given length.
* 
* DO NOT use .filter() in your solution.
* 
* DO use a for loop.
* 
* TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

/** For Loop **/
const filterLength = (number, arr) => {
  const arrOfStrGreaterThanNumber = []; 
  for(let str of arr) {
    if(str.length >= number) arrOfStrGreaterThanNumber.push(str);
    if(!arr.length) return []; 
  }
  return arrOfStrGreaterThanNumber;
}


/*** Logging ***/
const arr = [ "a", "ab", "abc", "abcd" ]; 
const arr2 = ['x', 'hello', 'xenophile'];
console.log(filterLength(3, arr));
console.log(filterLength(3, arr2));
