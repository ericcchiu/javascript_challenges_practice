/*
Given a name (string) and an array of people (objects), find the person with the given name and return his/her hobby. Return false if there is no person with the given name.

DO NOT use people.find()

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/
/** For Loop **/
// const findPerson = (string, array) => {
//   for (let person of array) {
//     if (person.name === string) return person.hobby; 
//   }
//   return false
// }

/** Recursion **/
const findPerson = (name, people) => {
    if (people[0] === undefined) return false; 
    if (people[0].name === name) return people[0].hobby; 
    return findPerson(name, people.slice(1));
}

const people = [ { "name": "Alice", "hobby": "programming" }, { "name": "Bob", "hobby": "gaming" } ];
const group = [{"name": 'Carly', "hobby": "dancing"}, {"name": 'Dan', 'hobby': 'climbing'}]; 

console.log(findPerson('Alice', people)); // Expect true
console.log(findPerson('Carl', group));  // Expect false