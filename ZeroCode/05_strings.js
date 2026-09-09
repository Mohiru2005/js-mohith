//
const name = 'mohith'
const repoCount = 51

//console.log(name + repoCount + " value")
// This one has bad redability in modern js we use different syntax

//console.log(`My name is ${name} and my repo count is ${repoCount}`);
// This is Template literal and this ${} is called string interpolation

// Another way to declare string

const gameName = new String("mohith")
console.log(gameName); //This is a object created by literal 

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

/* 
 A prototype is an object that JavaScript uses internally, and it holds
 methods that other objects can access through the prototype chain.
 To access any built-in function, JS uses a prototype chain — it follows inheritance to find and provide those built-in methods.
*/

const newString = gameName.substring(0,4)
console.log(newString);

console.log(newString.slice(-1,-4));
