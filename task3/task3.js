let text0 = [
  "Привіт!",
  "Як",
  "в",
  "тебе",
  "справи",
  "?",
  "Сподіваюся,",
  "що",
  "все",
  "гаразд.",
];
for (let element of text0) {
  document.write(`<div><p>${element}</p></div>`);
}
// ----------------------------------------------------------------------------------------------------------------
let text3 = [
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
];
for (let t3 of text3) {
  document.write(`<div><p>${t3}</p></div>`);
}

// -----------------------------------------------------------------------------------------------------
let text1 = [
  "Привіт!",
  "Як",
  "в",
  "тебе",
  "справи",
  "?",
  "Сподіваюся,",
  "що",
  "все",
  "гаразд.",
];
for (let t1 = 0; t1 < text1.length; t1++) {
  document.write(`<div><p>${text1[t1]}</p></div>`);
}
// --------------------------------------------------------------------------------------------------------
let text4 = [
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
];
for (let t4 = 0; t4 < text4.length; t4++) {
  document.write(
    `<div><p>${text4[t4].name} ${text4[t4].age} ${text4[t4].status}</p></div> `
  );
}
// -----------------------------------------------------------------------------------------------------
let text6 = [
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
];
let rr = 0;
while (rr < text6.length) {
  let ss = text6[rr];
  document.write(`<div><h1>${ss}</h1 ></div >`);
  rr++;
}
// ------------------------------------------------------------------------------------------------------
let text5 = [
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
];
let r = 0;
while (r < text5.length) {
  document.write(
    `<div><h1>${text5[r].name} ${text5[r].age} ${text5[r].status}</h1 ></div >`
  );
  r++;
}

// ---------------------------------------------------------------------------------------------------------

let listOfItems = [
  "html",
  "css",
  "javascript",
  "mysql",
  "mongodb",
  "react",
  "angular",
  "node.js",
];
for (let t5 = 0; t5 < listOfItems.length; t5++) {
  document.write(`<ul><li>${listOfItems[t5]}</li></ul> `);
}

// // ------------------------------------------------------------------------------------------------------------------------------

let products = [
  {
    title: "milk",
    price: 22,
    image:
      "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg",
  },
  {
    title: "juice",
    price: 27,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
  },
  {
    title: "tomato",
    price: 47,
    image:
      "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
  },
  {
    title: "tea",
    price: 15,
    image:
      "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png",
  },
];
for (let t6 = 0; t6 < products.length; t6++) {
  document.write(
    `<div class="product-card"><h3>${products[t6].title}. Price - ${products[t6].price}</h3> <img src="${products[t6].image}" width="110" alt="" class="product-image"/></div> `
  );
}
// // -----------------------------------------------------------------------------------------------------------------------------------------
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

for (t7 = 0; t7 < users.length; t7++) {
  if (users[t7].status === true) {
    console.log(users[t7].name);
  }
}

for (t8 = 0; t8 < users.length; t8++) {
  if (users[t8].status === false) {
    console.log(users[t8].name);
  }
}

for (t9 = 0; t9 < users.length; t9++) {
  if (users[t9].age > 30) {
    console.log(users[t9].name);
  }
}
// -----------------------------АБО-----------------------------
let tr = [];
let fa = [];
let n = 0;
let m = 0;
for (t10 = 0; t10 < users.length; t10++) {
  if (users[t10].status == true) {
    tr[n++] = users[t10].name;
  } else {
    fa[m++] = users[t10].name;
  }
}
document.write(`<div>Status "true": ${tr}</div>`);
document.write(`<div>Status "false": ${fa}</div>`);
console.log(tr);
console.log(fa);
