// #1
let s1 = "hello";
let s2 = "owu";
let s3 = "com";
let s4 = "ua";
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n8 = 16;
let b1 = true;
let b2 = false;
console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);
console.log(typeof s4);
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof n4);
console.log(typeof n5);
console.log(typeof n6);
console.log(typeof n8);
console.log(typeof b1);
console.log(typeof b2);
// #2
let firstName = "Iryna ";
let middleName = "Grygorivna ";
let lastName = "Donets";
let person = firstName + middleName + lastName;
console.log(person);
// #3
let a = 100;
let b = "100";
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// #4
let userName = prompt("Enter your firstname: ");
// if (!!!userName) {
//   userName = prompt("Enter your name ONE MORE TIME: ");
// }
let userMiddleName = prompt("Enter your middlename: ");
// if (!!!userMiddleName) {
//   userMiddleName = prompt("Enter your middlename ONE MORE TIME: ");
// }
let userAge = prompt("Enter your age: ");
// if (!!!userAge) {
//   userAge = prompt("Enter your age ONE MORE TIME: ");
// }
userAge = Number(userAge);
console.log(userName + " " + userMiddleName + " " + "age: " + userAge);
console.log(typeof userAge);