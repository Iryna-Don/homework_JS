// HW №6 OKTEN SCHOOL
// - Знайти та вивести довижину наступних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let str = "hello world";
let str1 = "lorem ipsum";
let str2 = "javascript is cool";
console.log(str.length);
console.log(str1.length);
console.log(str2.length);
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(str.toLowerCase());
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// у ній зайві тільки перші та останні символи, отож:
let str3 = " dirty string   ";
let str4 = str3.trim();
console.log(str4);
// ---------------------------------ЯКЩО-------------------------------------
// вважати, що посередині також можуть бути зайві пробіли, то:
let str5 = "                   dirty      string    ";
let str6 = [];
let str7 = [];
for (let i = 0; i < str5.length; i++) {
  str6[i] = str5[i];
}
let item = " ";
for (let i = 0; i < str6.length; i++) {
  if (
    (str6[i] !== item && str6[i + 1] !== item) ||
    (str6[i] !== item && str6[i + 1] === item) ||
    (str6[i] === item && str6[i + 1] !== item)
  ) {
    str7.push(str6[i]);
  }
}
let str8 = "";
for (i = 0; i < str7.length; i++) {
  str8 += str7[i];
}
let str9 = str8.trim();
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);
console.log(str9);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str10 = "Ревуть воли як ясла повні";
let str11 = str10.split(" ");
console.log(str11);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.
let number = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNumber = number.map((x) => String(x));
console.log(stringNumber);
// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

// function sortNums(arr, direction) {
//   if (direction === 'ascending') {
//     arr.sort((u1, u2) => {
//     return  u1 - u2;
//     })
// console.log(arr);
//   }
//   if (direction === 'descending') {
//     arr.sort((u1, u2) => {
//       return u2 - u1;
//     })
//     console.log(arr);
//   }
// }
// -----------------------------------------OR--------------------------------
function sortNums(arr, direction) {
  if (direction === "ascending") {
    arr.sort((u1, u2) => {
      return u1 - u2;
    });
    console.log(arr);
  }
  if (direction === "descending") {
    arr.sort((u1, u2) => {
      return u1 - u2;
    });
    console.log(arr.reverse());
  }
}
sortNums(nums, "descending");
// ==========================
// - є масив
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => {
  return a.monthDuration - b.monthDuration;
});
console.log(coursesAndDurationArray.reverse());

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let courseMoreThan5Month = coursesAndDurationArray.filter(
  (c) => c.monthDuration > 5
);
console.log(courseMoreThan5Month);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArrayWithId = [];
// let x = 0;
// for (const coursesAndDurationArrayItem of coursesAndDurationArray) {
//   coursesAndDurationArrayItem.id = x;
//   coursesAndDurationArrayWithId.push(coursesAndDurationArrayItem);
//   x +=1;
// }
// console.log(coursesAndDurationArrayWithId);
// ----------------------------OR---------------------------------
let n = 0;
let newCoursesAndDurationArray = coursesAndDurationArray.map((x) => {
  coursesAndDurationArray.push((x.id = n));
  n += 1;
  return x;
});
console.log(newCoursesAndDurationArray);
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
const values = [
  { name: "ace", weight: 14 },
  { name: "king", weight: 13 },
  { name: "queen", weight: 12 },
  { name: "jack", weight: 11 },
  { name: "10", weight: 10 },
  { name: "9", weight: 9 },
  { name: "8", weight: 8 },
  { name: "7", weight: 7 },
  { name: "6", weight: 6 },
];
const suits = ["spade", "clubs", "diamond", "heart"];
const deck = [];
for (let value of values) {
  for (let suit of suits) {
    if (suit === "spade" || suit === "clubs") {
      deck.push({
        name: value.name,
        weight: value.weight,
        suit: suit,
        color: "black",
      });
    } else {
      deck.push({
        name: value.name,
        weight: value.weight,
        suit: suit,
        color: "red",
      });
    }
  }
}
console.log(deck);

//  - знайти піковий туз
let aceOfSpade = deck.find((x) => x.name === "ace" && x.suit === "spade");
console.log(aceOfSpade);
//  - всі шістки
let sixsOfDeck = deck.filter((x) => x.weight === 6);
console.log(sixsOfDeck);
//  - всі червоні карти
let redCards = deck.filter((x) => x.color === "red");
console.log(redCards);
//  - всі буби
let diamondCards = deck.filter((x) => x.suit === "diamond");
console.log(diamondCards);
//  - всі трефи від 9 та більше
let moreThan9Clubs = deck.filter((x) => x.weight >= 9 && x.suit === "clubs");
console.log(moreThan9Clubs);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// =========================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let suit = { spades: [], diamonds: [], hearts: [], clubs: [] };
let newDeck = deck.reduce(
  function (deckOfSuits, x) {
    if (x.suit === "spade") {
      deckOfSuits.spades.push(x);
    }
    if (x.suit === "clubs") {
      deckOfSuits.clubs.push(x);
    }
    if (x.suit === "diamond") {
      deckOfSuits.diamonds.push(x);
    }
    if (x.suit === "heart") {
      deckOfSuits.hearts.push(x);
    }

    return deckOfSuits;
  },
  {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
  }
);
console.log(newDeck);
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];
// --написати пошук всіх об'єктів, в який в modules є sass
let filterItem = coursesArray.filter((x) => x.modules.includes("sass"));
console.log(filterItem);
// --написати пошук всіх об'єктів, в який в modules є docker
let filterItem1 = coursesArray.filter((x) => x.modules.includes("docker"));
console.log(filterItem1);
// -------------якщо знаеш, що елемент один-------------------------------------------------
let filterItem2 = coursesArray.find((x) => x.modules.includes("sass"));
console.log(filterItem2);
