/*

A variable is address of a memory location . When we declare a variable a memory is
assigned of that particular variable

*/

const userId = 1234           // Here once we declare a variable as a constant it cannot be changed
let userEmail = "mohith@123" // When we declare using "let" it can be modified
var userPassword ="1234"     // Var is also used to declare during old times it is not used anymore due block scope and function scope problem  
userCity = "Nellore"         //This type of declaration is not suggested to use this is not a clear way to declare a variable
console.log(userId);         // This console.log() is used to print data 

console.table([userId , userEmail , userPassword , userCity])
/* Instead of writing console.log() everytime we can print everything in a single table with the help of console.table()*/
/* When we decalre a variable and do not assign anything to it it will decalred as an undefined varaible */

