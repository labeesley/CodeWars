//let's practice the fundamentals of javascript

////////\\\\\\\\
/////Sept 1\\\\\
////////\\\\\\\\

// Function 3 - multiplying two numbers
// Implement a function called multiply, which takes two numbers and returns their product:

// multiply(2, 3) = 6
// multiply(0, 188) = 0
// multiply(85, 144) = 12240

// Write here your multiply-function
//declare a function multiply
//input: number
//output: number (product of inputs)

function multiply(num1, num2){
    return num1 * num2;
}

// console.log(multiply(2,3)); //=> 6
// console.log(multiply(0, 180)); //=> 0
// console.log(multiply(85, 144)); //=> 12240

//what if there are a varying values of arguments passed into the function?
function multiplyAll(){
    let product = 1; 
    for (let i = 0; i < arguments.length; i++){
        product *= arguments[i];
    }
    return product;
}

// console.log(multiplyAll(2, 3, 5)); //=> 30
// console.log(multiplyAll(0, 180, 2, 4)); //=> 0
// console.log(multiplyAll(85, 144)); //=> 12240

//////////////////////////////////////////////////////////////////////////////////////

//Grasshopper - Summation
/*
Summation
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

//declare a variable summation and assign it a value of a function definition
//input: number
//output: number (sum of all numbers leading up to the input)

const summation = function (num) {
    let total = 0;
    for (let i = 0; i <= num; i++){
        total += i;
    }
    return total;
}

// console.log(summation(2)); //=> 3
// console.log(summation(8)); //=> 36
// console.log(summation(0)); //=> 0 


//what if "number will always be a positive integer greater than 0" wasn't specified?
const summationPos = function (num) {
    //want positive integers only 
    //use Math.abs() method to keep integers passed into function positive
    let posNum = Math.abs(num);
    let total = 0;
    for (let i = 0; i <= posNum; i++){
        total += i;
    }
    return total;
}

// console.log(summationPos(2)); //=> 3
// console.log(summationPos(8)); //=> 36
// console.log(summationPos(0)); //=> 0 
// console.log(summationPos(-5)); //=> 15

//let make it work for negative integers as well
const summationAll = function (num) {
    // Code here
    //declare a variable total and assign it to the value of 0
    let total = 0;
    if (num >= 0) {
        for (let i = 0; i <= num; i++){
            total += i;
        }
    }
    if (num < 0) {
        for (let i = 0; i >= num; i--){
            total += i;
        }
    }
    return total;
  }

//   console.log(summationAll(2)); //=> 3
//   console.log(summationAll(8)); //=> 36
//   console.log(summationAll(0)); //=> 0 
//   console.log(summationAll(-5)); //=> -15

//////////////////////////////////////////////////////////////////////////////////////

//Beginner Series #4 Cockroach
/*
The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and returns it in cm per second, 
    rounded down to the integer (= floored).

For example:
    1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. 
    The result should be an Integer.
*/

//declare a function cockroachSpeed
//input: number (km/hr)
//output: number (cm/s)

function cockroachSpeed(s) {
    return Math.floor((s * 100000)/ 3600);
  }

//   console.log(cockroachSpeed(1.08)); //=> 30

////////////////////////////////////////////////////////////////////////////////////////////////////

//Grasshopper - Personalized Message
/*
Create a function that gives a personalized greeting. 
    This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	                return
name equals owner	    'Hello boss'
otherwise	            'Hello guest'
*/

//declare a function greeting
//input: string
//output: string

function greet(name, owner){
    if (name === owner){
        return 'Hello boss';
    }
    else {
        return 'Hello guest'
    }
}

// console.log(greet('Vivian', 'Vivian')); //=> 'Hello boss'
// console.log(greet('Vivian')); //=> 'Hello guest'
// console.log(greet('Lara', 'Vivian')); //=> 'Hello guest'

////////////////////////////////////////////////////////////////////////////////////////////////////

////////\\\\\\\\
/////Sept 4\\\\\
////////\\\\\\\\

//Beginner - Lost Without a Map

/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

//using map method
// function maps(x){
//     return x.map(ele => ele * 2)
// }

// console.log(maps([1, 2, 3])); //=> [2, 4, 6]

//use a for loop
function maps(x){
    let doubled = [];
    for (let i = 0; i < x.length; i++){
        doubled.push(x[i] * 2);
    }
    return doubled;
}

// console.log(maps([1, 2, 3])); //=> [2, 4, 6]

////////////////////////////////////////////////////////////////////////////////////////////////////

////////\\\\\\\\
/////Sept 5\\\\\
////////\\\\\\\\

//Convert a Boolean to a String

/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b){
    //your code here
    if (typeof(b) === 'boolean') {
        return JSON.stringify(b);
    }
  }

// console.log(booleanToString(true)); // 'true'
// console.log(booleanToString(false)); // 'false'

////////////////////////////////////////////////////////////////////////////////////////////////////

//Convert a String to a Number!
/*
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. 
    What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, 
    and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

//using parseInt()
// const stringToNumber = function(str){
//     // put your code here
//     return parseInt(str);
//   }

//using Number()
  const stringToNumber = function(str){
    // put your code here
    return Number(str);
  }

console.log(stringToNumber('1234')); // 1234
console.log(stringToNumber('605')); // 605
console.log(stringToNumber('1405')); // 1405
console.log(stringToNumber('-7')); // -7