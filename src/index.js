// //var is function scoped
// function greet() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// greet();
// //let is block scoped
// function vari() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   //   console.log(i);
// }
// vari();

// const x = 1;
// x = 2;
// let x;
// function reassign() {
//   x = 2;
//   console.log(x);
// }
// // reassign();
// const person = {
//   name: "Mosh",
//   talk() {
//     console.log("talk method");
//   },
//   walk() {
//     console.log("walk method");
//   },
// };
// console.log(person.name);
// person.talk();
// person.walk();

// const member = "name";
// person[member.value] = "john";
// console.log(([member.value] = "john"));

// const person = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   },
// };
// // person.walk();
// Bind method
// const walk = person.walk.bind(person);
// // console.log(walk);
// walk();
// const square = function (number) {
//   return number * number;
// };
// console.log(square(5));

// const square = (number) => number * number;
// console.log(square(5));
// const emp = [
//   { id: 1, name: "Rama" },
//   { id: 2, name: "Raghava" },
//   { id: 3, name: "RamaChandra" },
// ];
// const empName = emp.filter((e) => e.id === 1);
// console.log(empName);
// const activejobs = emp.filter((emp) => {
//   return emp.name;
// });
// console.log(activejobs);

// const prod = [
//   { id: 1, name: "Samsung", price: 1000 },
//   { id: 3, name: "OnePlus", price: 8000 },
//   { id: 3, name: "Philips", price: 6000 },
// ];
// const products = prod.find((e) => e.id === 3);
// console.log(products);
// console.log(prod[0]);

// const person = {
//   talk() {
//     // var self = this;
//     // setTimeout(function () {
//     console.log("this", this);
//     // }, 1000);
//   },
// };
// person.talk();
// const colors = ["red", "green", "blue"];
// const items = colors.map((e) => `<li>${e}</li>`);
// const col = [1, 2, 3, 4];
// const items = col.map((x) => x * 2);
// console.log(items);
// const address={

//   city:" ",
//   street:" ",
//   country:" ",
// }
// const {city,street:st,country}=address;

// const city=address.city;
// const street=address.street;
// const country=address.country;
//Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = [...first, "a", "b", ...second];
// console.log(combined);
// console.log(first);

// const first = { name: "Mosh" };
// const second = { role: "web developer" };
// const combined = { ...first, ...second, location: "Hyd" };
// console.log(combined);
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }
// const person = new Person("Mosh");
// console.log(person);
// import Employee from "./employee";
// import Employer from "./Employer";
// const emp = new Employer("Rama", "102", "Web Designer");
// emp.details();
// const emp2 = new Employee(101, "Raghava");
// emp2.introduce();
