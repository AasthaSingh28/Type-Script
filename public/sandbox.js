"use strict";
var character = 'mari';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
//cant change the type of datatypes once assigned
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(3.4));
//arrays
var names = ['aashi', 'isha'];
names.push('soniya');
names[0] = 'aastha';
console.log(names);
//note that we can also have mixed arrays of different datatypes
//objects
var btech = {
    branch: 'IT',
    number: 51,
};
btech.branch = 'CSE';
btech.number = 72;
//note that we cant even change the basic structure of object also cant add one more object.
//expilcit types
var characters;
var ninjas = [];
//union type
var mixed = [];
var uid;
//object
var ninja;
ninja = { name: 'aastha', age: 20 };
var ninjaone;
//ANY TYPE : it can be of any type either boolean number or string.
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { naam: 'aashi', age: 21 };
console.log(age);
var mixedarray = [];
mixedarray.push(24);
mixedarray.push(true);
mixedarray.push("nisha");
console.log(mixedarray);
console.log('test');
//functions
var greet;
greet = function () {
    console.log("hello!");
};
var add = function (a, b, c) {
    console.log(a + b);
};
add(5, 10); //gives 15
var logdetail = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
//Function Signature
var gree;
gree = function (name, greeting) {
    console.log("".concat(name, "says ").concat(greeting));
};
//example of func sign
var calc;
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
var logdetails;
logdetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
