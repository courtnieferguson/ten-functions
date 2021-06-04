"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// Define a function named `isTrue` that takes in any input and returns true if
//    the input provided is exactly equal to `true` in value and data type.
function isTrue(input){
    return input == true;
}

function isFalse(value){
    return value === false;
}

function not(input){
    return !input;
}

function addOne(input){
    return Number(input)+ 1;
}

function isEven(input){
    return input % 2 === 0;
}

function isIdentical(value1,value2) {
    return value1 === value2;
}

function isEqual(inputOne,inputTwo){
    return inputOne == inputTwo;
}

function or(inputOne,inputTwo){
    return inputOne || inputTwo;
}

function and(inputOne,inputTwo){
    return inputOne && inputTwo;
}

function concat(inputOne,inputTwo){
    return inputOne.toString() + inputTwo.toString();
}




