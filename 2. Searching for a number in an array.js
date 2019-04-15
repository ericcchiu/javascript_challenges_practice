/**
* Given a divider number and an array of numbers, return true if the array contains a non-zero number evenly divisible by the divider, and false otherwise.
* DO NOT use array.find()
*
* DO use a for loop.
*
* TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
 */
/** For Loop **/
const findDivisible = (divider, array) => {
    for (let num of array) { 
        if (num % divider === 0 && num !== 0) return true; 
    }
    return false;
}


 /** Recursive **/
//  const findDivisible = (divider, array, index = 0) => {
//      if(array[index]% divider === 0 && array[index] !== 0) return true; 
//      if (index >= array.length) return false;

//      return findDivisible(divider, array, index + 1); 
//  }

const arr = [8, 10]; 
const arr1 = [8, 11];
const arr2 = [0, 1, 2, 3, 4, 5, 6];
console.log(findDivisible(5, arr)) // Expect true 
console.log(findDivisible(5, arr1)) // Expect false 
console.log(findDivisible(7, arr2)) // Expect false 