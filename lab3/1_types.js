"use strict";
const isFetching = true;
const isLoading = false;
const int = 42;
const float = 4.2;
const num = 3e10;
const message = "Hello Typescript";
//Array
const numberArray = [1, 1, 2, 3, 4, 5, 8, 13];
const numberArray2 = [1, 1, 2, 3, 4, 5, 8, 13];
const words = ["Hello", "Typescript"];
const contact = ["Nikita", 1234567];
//Any
let variable = 42;
variable = "New String";
variable = [];
//Function
function sayMyName(name) {
    console.log(name);
}
sayMyName("Nikita");
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
const login = 'admin';
const id1 = 1234;
const id2 = '1234';
