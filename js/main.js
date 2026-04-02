// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const color1 =colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yelow"] = colors;
// console.log(c4);
// console.log("Деструктуризация объектов");
// const user = {
//     name: "Диана",
//     age: 18,
//     city: "Волжский",
// };
// const userName=user.name;
// const userAge = user.age;
// console.log(userName, userAge);
// const {name, age, city} = user;
// console.log(name, age, city);
// const { name: fullName, age: years} = user;
// console.log(personName, country);
// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }
// function printUser ({name, age, city}) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser(user);
// console.log("Деструктуризация объектов");
// const product = {
//     name: "Кошелек",
//     price: 500,
//     category: "Вещь",
//     inStock: true,
// };
// const {name, price, category, inStock} = product;
// console.log("Извлеченные свойства:", name, price, category, inStock);
// function printProduct ({name, price, category, inStock}) {
//     console.log(`Товар: ${name}`);
//     console.log(`Цена: ${price}`);
//     console.log(`Категория: ${category}`);
//     console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }
// printProduct(product);
// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединенный массив:", combined);
// const copy = [...arr1];
// console.log("Копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);
// console.log("Spread для объектов");
// const person = {
//     name: "Динара",
//     age: 18,
// };
// const address = {
//     sity: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fulInfo = {...person, ...address};
// console.log("Полная информация:", fulInfo);
// const personCopy = {...person};
// console.log("Копия объекта:", personCopy);
// const updated = {...person, age: 31, occupation: "Developer"};
// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные число:", rest);
// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];
// const combined = [...numbers1, ...numbers2];
// console.log("Объединённый массив:", combined);
// function findMax(...numbers) {
//     return Math.max(...numbers);
// }
// console.log("Максимум из 1,2,3:", findMax(1, 2, 3));
// console.log("Максимум из 10,20,30,40:", findMax(10, 20, 30, 40));
// const n1 = { a: 1, b: 2 };
// const n2 = { c: 3, d: 4 };
// const ob = { ...n1, ...n2 };
// console.log("Объединённый объект:", ob);
// import {greet, add, PI} from "./utils.js";
// console.log("Модули");
// console.log(greet("Диана"));
// console.log("5 + 3=", add(5, 3));
// console.log("Значение PI:", PI);
// import { multiply as умножить} from "./utils.js";
// console.log("4 * 7=", умножить(4, 7));
// import * as Utils from "./utils.js";
// console.log(Utils.greet("Динара"));
// console.log("Умножить:", Utils.multiply(3,9));