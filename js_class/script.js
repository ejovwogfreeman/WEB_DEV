// alert("Hello from an external js file");

//this is a single line comment

/* this is 
a multi line 
comment */

// console
// console.log("hello world");
// console.warn("this is a warning");
// console.error("this is an error");

// js varialbe
// var, let and const

// var myName = "godbless";

// myName = "Mr Godbless";

// console.log("Hello my name is " + myName);

// var is globally scoped
// it can be redefinded/redeclared
// it also be reassigned
// it can be initialised

// var myName = "godbless";

// var myName = "freeman";

// let and const (introduced in es6)
// both are locally scoped

// let
// it cannot be redefined/redeclared
// it can be reassigned
// it can be initialised

// let myName = "godbless";

// myName = "Freeman";

// const
// it cannot be redefined/redeclared
// it cannot be reassined
// it cannot be initialsed

// const myName = "Godbless";

// myName = "Freeman";

// console.log(myName);

// myName = "Godbless";

// console.log(myName);

// myName = "Godbless";

// const myName;

// console.log(myName);

// js data types

// primitive and referece

// primitive (numbers, strings, boolean, undefined and null)

// numbers

// let num1 = 23;
// let num2 = 33;

// console.log(num1 + num2);

// let rating = 4.5;

// strings

// let myName = "godbless";

// let myAge = 33;
// let sentence =
// 'He screamed "whooaaaa" when he saw the snake';
//   "Hello world, my name is " + myName + " and i am " + myAge + "years old";
//   template literals
//   `He screamed "whooaaaa" when he saw the freeman's dog`;
//   `Hello wold, my name is ${myName} and i am ${myAge}years old`;

// console.log(sentence);

// console.log(20 < 10);

// let myAge;

// let myAge = undefined;

// var myAge = null;

// console.log(myAge);

// checking a data type;

// let myVar = null;

// console.log(typeof myVar);

// referece data types (arrays and objects)

// array
// array construction method
// square bracket method

// array construction method
// let myArr = new Array("godbless", "freeman", "lancelot");

// square bracket method
// let myArr = ["godbless", "freeman", "lancelot"];

// objects
// let person = {
//   firstName: "godlbess",
//   lastName: "freeman",
//   email: "gb@gmail.com",
//   isAdmin: true,
//   rating: 4.5,
// };

// console.log(person);

// javascript operators
// Assignment operator
// Arithmetic operator
// Comparison operator
// Logical operator(conditionals)
// Ternary operator and Unary operator(type operator)

// assignment operator; (=,  +=, -=)

// let age = 20;
// age = age + 5;
// age += 5;
// age = age - 5;
// age -= 5;

// console.log(age);

// let age = 25;
// let myArr = ["godbless", "freeman", "lancelot"];

// arithmetic opertors (+, -, *, /, %)

// let x = 10;
// let y = 5;

// console.log([2, 4, 6, 8, 10]);

// print even numbers using modulus
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// console.log(x % y);

// comparison operators (>, <, >=, <=, ==, ===, !=, !==)

// console.log(50 !== "50");

// logical operators (&&, ||, !)

// console.log(!(30 > 20 || 40 > 30));

// if (30 < 20) {
//   console.log("true statement");
// } else {
//   console.log("false statement");
// }

// ternary operator
// console.log(30 < 20 ? "true statement" : "false statement");

// unary operator (++, --, typeof)
// let age = 20;

// age--;

// let myVar = 25;

// console.log(typeof myVar);

// strings

// concatenation

// let myName = "godbless";
// let myAge = 25;

// let sentence = `my name is ${myName} and i am ${myAge} years old`;

// let num1 = 23;
// let num2 = "456";

// console.log(num1 + num2);

// string methods
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String charAt()
// String split()

// string search methods
// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()

// string length
// console.log(myString.length);

// string indexing
// console.log(myString[myString.length - 1]);

// String slice()
// String substring()
// String substr()

// slice(start, end)
// substring(start, end)
// substr(start, length)

// let fruits = "Apple, Banana, Orange";

// console.log(fruits.substr(7, 14));

// let myString = "is a good boy";
// let myName = " FREEMAN ";

// let myNewStr = myString.replaceAll("s", "g");

// console.log(myName.toLowerCase());

// let sentence = myName.concat(" ", myString);

// let myNewStr = myName.trim();
// console.log(myNewStr.length);

// let myName = "godbless";

// console.log(myName.charAt("0"));

// let email = "ejovwogfreeman@gmail.com";

// console.log(email.split("@")[0]);

// let myName = "godbless";

// console.log(myName.endsWith("s"));

// arrays

// let people = new Array("godbless", "freeman", "lancleot");

let people = ["godbless", "freeman", "lancelot", "spiderman"];

// console.log(people[people.length - 1]);

// array methods
// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()

// people.pop(); removes from the end of an array
// people.push("peter parker", "jet li", "jackie chan"); adds to the end of an array

// people.shift(); removes from the beginning of an array
// people.unshift("mark powells", "friedel craft", "robert"); adds to the beginning of an array

// let arr1 = ["godbless", "freeman"];

// let arr2 = ["lancelot", "arthur"];

// let newArr = arr1.concat(arr2);

// delete arr1[0];
// console.log(arr1);

// console.log(newArr);

// let myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let newArr = myArr.flat();

// console.log(newArr);

// slice(start, end);
// splice(start, length);

// let knights = ["godbless", "freeman", "lancelot"];

// let newKnights = knights.splice(0, 2);

// console.log(newKnights);

// objects

// let person = {
//   name: "godbless",
//   email: "gb@gmail.com",
//   isAdmin: true,
//   school: "uniben",
//   subjects: ["mth", "chm", "phy", "gst"],
//   contact: {
//     fb: "ejvowgfreeman001",
//     ig: "ejvowgfreeman",
//     twt: "ejvowgfreeman",
//     tk: "ejvowgfreeman",
//     li: "ejvowgfreeman",
//     gh: "ejvowgfreeman",
//   },
// };

// console.log(person.subjects[2]);

// person.isMarried = true;

// console.log(person);

// js loops
// for Loop
// while Loop
// for…in
// for…of
// forEach
// map

// for loop

// syntax
// for(initilizer; boundary; increment){
//     codeblock
// }

// let i = 1;
// for (i; i < 100; i++) {
//   console.log(i);
// }

// while loop syntax
// while(codition){
//     codeblock
// }

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// break and continue

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// let person = {
//   name: "godbless",
//   email: "freeman",
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// let myName = "godbless";

// for (let i of myName) {
//   console.log(i);
// }

// let knights = ["godbless", "freeman", "lancelot", "peter parker"];
// knights.push("mark powells", "john doe");
// for (let i = 0; i < knights.length; i++) {
//   console.log(knights[i]);
// }
// let i = 0;
// while (i < knights.length) {
//   console.log(knights[i]);
//   i++;
// }

// higher order array methods
// forEach
// map
// reduce
// sort

// let knights = ["godbless", "freeman", "lancelot", "peter parker"];

// knights.forEach((knight) => {
//   console.log(knight);
// });

// knights.map((knight) => {
//   console.log(knight);
// });

// let scores = [20, 30, 23, 89, 40, 34];
// let knights = ["godbless", "freeman", "lancelot", "peter parker"];

// scores.reverse();

// console.log(scores);

// let sorted = knights.sort((a, b) => b - a);

// console.log(sorted);

// let total = scores.reduce((a, b) => a + b);

// // console.log(total);
// let acc = 0;
// for (let i = 0; i < scores.length; i++) {
//   acc += scores[i];
// }
// console.log(acc);

// js conditionals
// If , else, elseif
// Ternary operator
// Switch statement
// Break and Continue

// if statement syntax
// if(condtion){
//     codeblock
// }

// let age = 15;

// if (age > 20) {
//   console.log("your are eligible");
// } else if (age === 18) {
//   console.log("manageable");
// } else {
//   console.log("go home");
// }

// console.log(age >= 18 ? "good to stay" : "go home");

// let color = "orange";

// switch (color) {
//   case "red":
//     console.log("your color is red");
//     break;
//   case "blue":
//     console.log("your color is blue");
//     break;
//   case "green":
//     console.log("your color is green");
//     break;
//   default:
//     console.log("not a match");
//     break;
// }

// js functions

// function syntax
// function functionName() {
//   codeblock;
// }

// function greet(name = "godbless", time = "evening") {
//   console.log("hello, welcome " + name + " good " + time);
// }

// function addNum(num1 = 1, num2 = 1) {
//   console.log(num1 + num2);
// }

// addNum(2, 4);

// return statement
// it stores the value in memory of the function
// it blocks the rest of the code from running

// function addNum(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }

// let sum = addNum(7, 7);

// console.log(sum);

// const addNum = (num1) => num1 + 5;

// let sum = addNum(7);

// console.log(sum);

// let name = prompt("plese enter your name");

// console.log(name + " you are welcome");

// oop
// function method

// person = {
//   name: "godbless",
//   email: "gb@gmail.com",
// };

// console.log(object)

// function Person(name, email) {
//   this.name = name;
//   this.email = email;
// }

// Person.prototype.greet = function () {
//   return "Hello, my name is " + this.name + " my email is " + this.email;
// };

// es6 classes
// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   greet() {
//     return "Hello, my name is " + this.name + " my email is " + this.email;
//   }
// }

// // instantiating an object
// const person1 = new Person("godbless", "gb@gmail.com");

// console.log(person1);

// js dom
// Sigle element selectors:
// document.getElementById, document.querySelector
// Multiple element selectors:
// document.getElementsByClassName, document.getElementsByTagName, document.querySelectorAll

// let sec = document.getElementById("id1");

// sec.style.backgroundColor = "indigo";
// sec.style.color = "white";

// console.log(sec);

// let p = document.querySelector("#id1");

// console.log(p);

// let ps = document.getElementsByClassName("class1");
// let ps = document.getElementsByTagName("p");
// let ps = document.querySelectorAll("p");
// let ps = document.querySelectorAll(".class1");
// ps.style.background = "red";

// for (let i = 0; i < ps.length; i++) {
//   ps[i].style.background = "red";
// }
// console.log(ps);

// let btn = document.getElementById("btn");

// btn.addEventListener("dblclick", () => {
//   document.querySelector("body").style.background = "black";
//   document.querySelector("body").style.color = "white";
// });

// console.log(btn);

// window.alert("hello");
// console.log(window);
// console.log(document.location.host);

// let form = document.querySelector("form");
// let name = document.getElementById("name");
// let email = document.getElementById("email");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (name.value === "" || email.value === "") {
//     return alert("please fill all fields");
//   } else {
//     console.log(name.value);
//     console.log(email.value);
//     name.value = "";
//     email.value = "";
//   }
// });

// textContent
// innerText
// innerHTML

let btn = document.getElementById("btn");
let heading = document.getElementById("h1");

btn.addEventListener("click", () => {
  heading.innerHTML = "<h6>Changed to something else</h6>";
});
