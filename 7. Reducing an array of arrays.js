/*Given an array of arrays, return those arrays concatenated together.
*
* DO NOT use arrays.reduce() or Function.prototype.apply
*
* DO use a for loop.
*
* TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

/**  For Loop **/
// const concatArrays = (arrays, flatArr = []) => {
//   // const flatArr = []
//   for (let i = 0; i < arrays.length; i += 1) {
//     for (let j = 0; j < arrays[i].length; j += 1) {
//       flatArr.push(arrays[i][j])
//     }
//   }
//   return flatArr;
// }

/** ES6 **/
// const concatArrays = (arrays) => [].concat(...arrays);

/** Recursive Solution **/
const concatArrays = (arrays, output = []) => {
  if (arrays.length === 0) return output; 
  arrays.forEach(item => output.push(item));
  return arrays[0].concat(concatArrays(arrays.slice(1)));
}


const arr1 = [[10, 20], [30], []];
const arr2 = [[22], [33, [44]], [55]];
const arr3 = [];

console.log(concatArrays(arr1));
console.log(concatArrays(arr2));
console.log(concatArrays(arr3)); 