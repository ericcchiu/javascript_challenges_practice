/*Given an array of strings, return all strings concatenated together.
* DO NOT use strings.reduce() or strings.join('')
* 
* DO use a for loop.
* 
* TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
* 
*/

/** For Loop **/
// const concatStrings = (strings, str = '') => {
//     for (let char of strings) {
//         str += char;
//     }
//     return str;
// };

/*** Recursion ***/
const concatStrings = (strings, str ='') => { 
   
    if (strings.length === 0) return ""; 
  
    str += strings[0];
  
    return str + concatStrings(strings.slice(1));
};

const strings = ['a', 'b', 'c', 'd']; 
const empty = []; 
console.log(concatStrings(strings)); 
console.log(concatStrings(empty)); 