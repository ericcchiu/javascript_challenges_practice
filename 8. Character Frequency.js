/* Character Frequency
* Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.
*/

const characterFrequency = (string) => {
  const storage = {}; 
  const charFrequencyResult = []; 

  for (let key of string) {
    storage[key] = storage[key] + 1 || 1; 
  }

  for (let key in storage) {
    const tuple = [key, storage[key]];
    charFrequencyResult.push(tuple);
  }

  charFrequencyResult.sort((a, b) => [1] !== b[1] ?  b[1] - a[1] : (a > b ? 1 : -11));


  // charFrequencyResult.sort((a, b) => {
  //   if(a[1] !== b[1]) return b[1] - a[1]; 
  //   return a > b ? 1 : -1; 
  // });

  return charFrequencyResult;
}

let string = "aaabbc"; 
let string1 = "mississippi";
let emptyStr = ''
console.log(JSON.stringify(characterFrequency(string))); 
console.log(JSON.stringify(characterFrequency(string1)));
console.log(characterFrequency(emptyStr));