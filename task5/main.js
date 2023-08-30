// ДЗ №5
//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let getAreaOfARectangle = (a, b) => a * b;
getAreaOfARectangle(3, 12);
console.log(getAreaOfARectangle(3, 12));
// ----------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let getAreaOfCircle = (r) => Math.PI * r ** 2;
console.log(getAreaOfCircle(3));
// заокруглення до сотих
console.log(getAreaOfCircle(3).toFixed(2));
// ----------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
let getCylinderArea = (h, r) => 2 * (Math.PI * r ** 2) + 2 * Math.PI * r * h;
console.log(getCylinderArea(2, 5).toFixed(2));
// ----------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент
let displayingArrayElements = (...someArray) => {
  for (i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
  }
  return console.log(someArray);
};
displayingArrayElements(2, 8, 12, 4.3, "more", true, false, 3, 0);
// // -------------------------------------------------OR--------------------------------------------------
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
let displayingArrayElements1 = (someArray1) => {
  for (i = 0; i < someArray1.length; i++) {
    console.log(someArray1[i]);
  }
  console.log(someArray1);
  return console.log("That's all");
}
displayingArrayElements1(users);

// // ----------------------------------------------------------------------------------------------------
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let makeAParagraph = (paragraph) => {
  document.write(`<p>${paragraph}</p>`);
  return "Paragraph is done";
}
makeAParagraph("I like JavaScript");
// console.log(makeAParagraph('I like JavaScript'));
// // ----------------------------------------------------------------------------------------------------
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let makeAList = (text) => {
  document.write(`<ul>`);
  for (i = 1; i <= 3; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
  return "List is done";
}
makeAList("I like JS");
// // ----------------------------------------------------------------------------------------------------
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим(тут використовувати цикл)
let makeAList1 = (text, q) => {
  document.write(`<ul>`);
  for (i = 1; i <= q; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
  return "List is done";
}
makeAList1("I still like JS", 3);
// // ----------------------------------------------------------------------------------------------------

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let displayingArrayElements2 = (...someArray2) => {
  document.write(`<ul>`);
  for (i = 0; i < someArray2.length; i++) {
    document.write(`<li>${someArray2[i]}</li>`);
  }
  document.write(`</ul>`);
  return console.log("That's the end");
};
displayingArrayElements2(65, 23, 12, 34.3, "more fun", true, false, 3, 78);
// ----------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users2 = [
  { id: 1, name: "vasya", age: 31 },
  { id: 2, name: "petya", age: 30 },
  { id: 3, name: "kolya", age: 29 },
  { id: 4, name: "olya", age: 28 },
  { id: 5, name: "max", age: 30 },
  { id: 6, name: "anya", age: 31 },
  { id: 7, name: "oleg", age: 28 },
  { id: 8, name: "andrey", age: 29 },
  { id: 9, name: "masha", age: 30 },
];
let getArrayToBlocks = (someArray3) => {
  for (i = 0; i < someArray3.length; i++) {
    document.write(
      `<div>${someArray3[i].id} ${someArray3[i].name} ${someArray3[i].age}</div>`
    );
  }
  return "That's all";
}

getArrayToBlocks(users2);
// --------------------------------------------------------OR------------------------------------------
// -------------------побудова клієнтської бази (масив із заданою кількістю учасників)-----------------
// let buildUsersBaseOfNMembers = (N) => {
//   let userId = 1;
//   let userBase = [];
//   for (q = 0; q < N; q++) {
//     let userName = String(prompt("Enter your name: "));
//     let userAge = +prompt("Enter your age: ");
//     let user = { id: userId, name: userName, age: userAge };
//     userBase[userBase.length] = user;
//     userId += 1;
//   }
//   console.log(userBase);
//   return userBase;
// }
// buildUsersBaseOfNMembers(2);
// ----------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву
let arr1 = [-100, 3, -4, 10, -8];
let minimumArrayElements = (array) => {
  let min = array[0];
  for (let number of array) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
console.log(minimumArrayElements(arr1));
// -------------------------------------------------------OR------------------------------------------------
let minArrayElements = (...someArray3) => {
  let min = someArray3[0];
  for (let number of someArray3) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
console.log(minArrayElements(12, -120, 0, -27.3, 3, -89));
// ----------------------------------------------------------------------------------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (someArray4) => {
  let total = 0;
  for (let number of someArray4) {
    total = total + number;
  }
  return total;
}

console.log(sum([1, 2, 0, 10,10]));
// ----------------------------------------------------------------------------------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
  console.log(`The maximum value of the index is ${arr.length - 1}`);
  let perem = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = perem;
  return arr;
}
console.log(swap([1, 2, 3, 4, 5, 6, 7, 8], 2, 3));
// ----------------------------------------------------------------------------------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  let findObj = { currency: exchangeCurrency };
  let y = currencyValues.find((curr) => curr.currency === findObj.currency);
  // console.log(y);
  // console.log(y.value);
  result = sumUAH / y.value;
  return result;
}
console.log(
  exchange(
    10000,
    [
      { currency: "USD", value: 40 },
      { currency: "EUR", value: 42 },
    ],
    "USD"
  )
);
