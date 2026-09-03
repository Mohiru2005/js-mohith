//let score = 33
// Here the score could be a number string or whatever it can be when we get the data from a format
// So we have to convert those different data types into the ones which we desire so we use this conversion

//for example
//console.log(typeof score); // When we run this its a number
let score = "33"
console.log(typeof score);
// Now its a string so we have to convert it into the data type which we want

// Now we will convert the String into a integer
let rank = Number(score)
console.log(rank);
// Now it is converted into Number and stored in the memory address of rank
// What if the string is combination of numbers and words will js still be able to convert?
// The Anwser is YES because it does convert the combo but it returns a attribute called NaN (Not a Number)
// If the variable is assigned with null it will return as 0 as well 
// If the value is undefined it will also return NaN
// If the value is a boolean if its true it will return 1 or if its false it will return 0
// If the value is a pure String it will also return NaN
