//object and class

// class Person {
//   constructor(name, age) {
//     this.name = name;   // properties
//     this.age = age;
//   }

//   // method
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// // create object from class
// const person1 = new Person("Rohit", 21);
// person1.greet();


//--

// const employee={
//     calcTex() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanarjun1 ={
//     salary:50000,
// };
// const karanarjun2 ={
//     salary:40000,
// };
// const karanarjun3 ={
//     salary:30000,
// };
// const karanarjun ={
//     salary:20000,
// };

// karanarjun.__proto__= employee;

//__

// class Toyotacar{
//     start(){
//         console.log("rudy sadey go");
//     }

//     stop(){
//         console.log("stop nameof the flope kanun ki kasam bharathmatha ki kasam ruk jhao");
//     }
// }

//__
// class persone{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class Engineer{
//     work(){
//         console.log("solve problem, build something");
//     }
// }

// let shradhaobj = new Engineer(); 

//--
//super keyword
// class person {
//     constructor(){
//         console.log("enter parent");
//         this.species ="homo work";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends person {
//     constructor(branch){
//         console.log("1 child constructor");
//         super();
//         this.branch =  branch;
//         console.log("2 child constructure");
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engobj = new Engineer("chemical engg");