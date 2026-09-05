"use strict";  
// Treat all JS code as newer  version of JavaScript
//Usually semi columns are not mandatory in JavaScript we use ";" for better readability 

let name = 'mohith'
let age = 21
let isLoggedIn = true

// number range is around 2 power 53
// bigint
// string is either '' or ""
// boolean is true/false
// null is standalone value 
// undefined is like the value is not assigned
// symbol is like when we talk about unique things
/* These are primitive data types */

//object

console.log(typeof null);       //It is a object
console.log(typeof undefined);  //undefined
//#--------------------------------------------------------------------------------------------------------------------------------#

//Primitive data type(call by value is where orginal data isnt given we will get a copy)

// 7 types - String , Number , Boolean , null , undefined , Symbol , BigInt




//const id = Symbol("123")
//const anotherId = Symbol("123")

//console.log(id===anotherId);  //Symbol represents a unique value

//#--------------------------------------------------------------------------------------------------------------------------------#

//Non Primitive data type (call by reference orginal data will be accessed)
// Array , Objects , Functions 
// Js is dynamically typed

// Arrays 

const heroes = ["goku" , "luffy" , "naruto chapri" , "ichigoat"]

//We have objects under curly braces they are in key pair values

let myObj=
{
    name : "mohith",
    age : 21,
}

//Fuctions also treated as a variable in js
const myFucntion=myfunc()
{
    console.log("hello world");
    
}


// Memories
// Stack (primitive) and Heap memory (Non primitive)


