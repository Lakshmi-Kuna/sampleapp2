// function greet() {
//   for (var i = 0; i < 4; i++) {
//     console.log(i); //inside the function
//   }
//   console.log(i);
// }
// greet();

// var x=3;
// if (x === 2) {
//   x = 2;
//   console.log(x);
// }

// let x = 3;
// if (x === 3) {
//   console.log(x);
// }
// const rama = {
//   id: 101,
//   name: "Rama",
// };
// console.log(rama);
// const emp = ["rama", "Raghava", "Raaam"];
// const resul = emp[1];
// console.log(resul);

// const emp = [
//   { id: 101, name: "Srirama" },
//   { id: 101, name: "JayaRama" },
//   { id: 103, name: "JaanakiRama" },
// ];
// const result = emp.find((e) => e.id === 101);
// console.log(result);

// const emp = ["rama", "raghava", "ramachandra"];
// const result = emp.map(
//   (e) => `
// ${e}
// `
// );
// console.log(result);
// console.log(emp[2]);
// const persons = [
//   { id: 101, name: "Rama" },
//   { id: 101, name: "JayaRama" },
//   { id: 103, name: "JaanakiRama" },
// ];
// // const emp = persons.map((e) => `${e.id},${e.name}`);
// // console.log(emp);

// const emp = persons.find((e) => e.id === 101);
// console.log(emp);

// const square = (number) => number * number;
// console.log(square(5));

// const squar = function (number) {
//   return number * number;
// };
// console.log(squar(6));
// function emp() {
//   for (let i = 0; i < 10; i += 2) {
//     console.log(i);
//   }
// }
// emp();
// const names = ["rama", "raghava", "ramachandra"];
// const result = names.map((e) => e.toUpperCase());
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((e) => e * 3);
// console.log(result);

// for (var i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (var i = 0; i < 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// var n = 352,
//   reverse = 0,
//   reminder;
// while (n > 0) {
//   reminder = n % 10;
//   n = Math.floor(n / 10);
//   reverse = reverse * 10 + reminder;
// }
// console.log(reverse);
// const emp = [1, 2, 3, 4, 5];
// const result = emp.map((e) => e * 2);
// console.log(result);
// const obj = {
//   name: "rama",
//   talk() {
//     console.log(this);
//   },
// };
// obj.talk();

const first = [1, 2, 3];
const second = [4, 5, 6];
const result = [...first, "a", "b", ...second];
console.log(result);
