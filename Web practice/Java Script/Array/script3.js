//Funtion in js script
//block of code that performs a specific task can be invoked whenever nedded

//funtion call
// function myfunction(msg){
//     console.log(msg);
// }
// myfunction("hello function is good boy");
//.................................
//funtion two number sum

// function sum(x,y){
//     console.log(x+y);
// }
// sum(100,700);
//o/p-800 in devtools
//.............................
// let z=2;for example
//    function sum(x,y){
//      s=x+y+z;
//      console.log("before return");
//      return s;
//    }

//    let val=sum(100,8008);
//    console.log(val);
//..........................

// function sum(a,b){
//     return a+b;
// }
//   let val=sum(10,20);
//   console.log(val);

//.............................  

//arrow funtion
// const arrowsum=(a,b) =>{
//     console.log(a+b);
// };
// function mul(a,b){
//     return a*b;
// }
// const arrowmul=(a,b) =>{
//     console.log(a*b);
// };

//.........................

//count vowels
// function countVowels(str) {
//     let count=0;
//     for(const char of str){
//        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         count++;
//        }
//     }
//     return count;
// }
//.......................
//print a to z character
// let i;
// for(i=65 ; i<=90 ;i++){
//     console.log(String.fromCharCode(i));
// }
//..........................

//forEach loop in array

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });
//..................
//print square all the number nums
//   let nums=[2,3,4,5,6];

//   nums.forEach((num) =>{
//     console.log(num*num);
//   });
//....................

// some more array method
//let newArr=arr.filter((val)=>{
//   return val%2==O;    
//})
//...............
//even value
// let arr=[1,2,3,4,5,6,7];

// let evenArr=arr.filter((val)=>{
//     return val % 2 == 0;  //odd ka liya !==
// });
// console.log(evenArr);
//..........................
//some more method;
// let arr=[1,2,3,4];

// const output=arr.reduce((res,curr)=>{
//     return res+curr; //largest number-> return res > curr ? res : curr;
// });
// console.log(output); 
//Q
let marks=[97,64,32,49,99,96,86];

let topper=marks.filter((val) =>{
    return val>90;
});
console.log(topper);