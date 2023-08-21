// Домашня до 2 лекції JS OKTEN SCHOOL

// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [
  null,
  "homework",
  19,
  3.14,
  true,
  false,
  undefined,
  {},
  [],
  function () {},
];
for (
  let i = 0;
  i < array.length;
  i++ // { console.log(typeof array[i]) };
) {
  console.log(array[i]);
}

// /--------------------------------------------------------------------------------------------------------------------------
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
  title: "title1",
  pageCount: 280,
  genre: "genre1",
};
let book2 = {
  title: "title2",
  pageCount: 50,
  genre: "genre2",
};
let book3 = {
  title: "title3",
  pageCount: 120,
  genre: "genre3",
};
// console.log(book1)
// console.log(book3.title);
// console.log(book2.pageCount);
// let books = [book1, book2, book3];
// console.log(books[0].pageCount);
// console.log(books[2].pageCount);
// console.log(typeof books[2].pageCount);
// console.log(typeof book1.genre);
// console.log(typeof books);
// console.log(typeof book1);
// console.log (books.constructor);
// console.log(book2.constructor);
// console.log(books[2].pageCount.constructor);
// console.log(book1.genre.constructor);
// console.log(books);

// /--------------------------------------------------------------------------------------------------------------------------
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let listOfBooks = [
  {
    title: "title4",
    pageCount: 34,
    genre: "genre4",
  },
  {
    title: "title5",
    pageCount: 345,
    genre: "genre5",
  },
  {
    title: "title6",
    pageCount: 100,
    genre: "genre6",
  },
];
// let authorName = String();
// let authorAge = Number();
for (let r = 0; r < listOfBooks.length; r++) {
  listOfBooks[r].author = [{ name: "authorName" }, { age: "authorAge" }];
}
console.log(listOfBooks);

// -----------------------------------------------------------------------------------------------------------------------------

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
  { name: "Ihor", username: "igor66", password: "Ihorjuk" },
  { name: "Vasja", username: "fghty", password: "Vasjaetr" },
  { name: "Maria", username: "dfger", password: "Mariafgh" },
  { name: "Petro", username: "dffgh", password: "Petro6767" },
  { name: "Grygorij", username: "fgg", password: "oppp90" },
  { name: "Mykola", username: "cvb", password: "y5677698" },
  { name: "Svitlana", username: "shrty", password: "213245" },
  { name: "Zoja", username: "eret", password: "ghgkyuk" },
  { name: "Mykhailo", username: "trtyju", password: "wewterty" },
  { name: "Fedir", username: "sdfg", password: "mklil" },
];
for (let n = 0; n < users.length; n++) {
  console.log(users[n].password);
  console.log(`${users[n].name} - ${users[n].password}`);
}

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// let x = prompt("Enter a number: ");
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = prompt("Enter a number: ");
// if (x > 0 || x < 0) {
//     console.log("Вірно")
// } else { console.log("Невірно") };
// ---------------------------------------------АБО-----------------------------------

let x = +prompt('Enter a number: ');
x == 0 ? console.log("Невірно") : console.log("Вірно");
console.log(x)
// ----------------------------------------------------------------------------------------------------------------

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 60;
let time = +prompt("Enter some minutes of the hour: ");

if (time >= 0 && time < 59) {
  if (time >= 0 && time <= 15) {
    console.log("It's the first quarter of an hour");
  } else if (time > 15 && time <= 30) {
    console.log("It's the second quarter of an hour");
  } else if (time > 30 && time <= 45) {
    console.log("It's the third quarter of an hour");
  } else {
    console.log("It's the fourth quarter of an hour");
  }
} else if (time < 0) {
  console.log("You choosed a negative time value");
} else {
  console.log("Select a time within 59 minutes");
}
// -------------------------------------------------------------------------------------------------
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 20;
let day = +prompt("Enter some date of the month: ");

if (day > 0 && day < 31) {
  if (day >= 0 && day <= 10) {
    console.log("It's the first decade of the month");
  } else if (day > 11 && day <= 20) {
    console.log("It's the second decade of the month");
  } else {
    console.log("It's the third decade of the month");
  }
} else if (day <= 0) {
  console.log("You choosed a negative or zero day value");
} else {
  console.log("Select a day a day within the length of the month");
}

// -------------------------------------------------------------------------------------------------------------------
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let daysOfWeek=1;

let daysOfWeek = +prompt('Enter the serial number of the day of the week: ');

switch (daysOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday ");
    break;
  case 3:
    console.log("Wednesday ");
    break;
  case 4:
    console.log("Thursday ");
    break;
  case 5:
    console.log("Friday ");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Sorry, but there is no the " + daysOfWeek + "th day of week.");
}

// --------------------------------------------------------------------------------------------------------------------
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// // let c = -6;
// // let d = -2;
let c = Number(prompt("Enter the first number: "));
let d = Number(prompt("Enter the second number: "));
if (c > d) {
  console.log(c);
} else if (c === d) {
  console.log("These numbers are equal");
} else {
  console.log(d);
}

// -------------------------------------------------------------------------------------------------------------------------------------
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let z = null;
if (
  z == false ||
  z == null ||
  z == undefined ||
  z == 0 ||
  z == -0 ||
  z == 0n ||
  z == NaN ||
  ""
) {
  z = "default";
}
console.log(z);

// ------------------------------------------------------------------------------------------------------------------------------------------
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
for (let k = 0; k < coursesAndDurationArray.length; k++) {
  if (coursesAndDurationArray[k].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[k].title} - Супер`);
  }
}
