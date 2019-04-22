/*
* Given an array of numbers, return the sum of those numbers.
*
* DO NOT use numbers.reduce()
*
* DO use a for loop.
* 
* TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

/** For loop **/

const sum = (arr, total = 0) => {
  for (let value of arr) {
    total += value; 
  }
  return total;
}
const numbers = [10, 20, 30];
const number = [];

console.log(sum(numbers)); // expect 60
console.log(sum(number)); // Expect 0
