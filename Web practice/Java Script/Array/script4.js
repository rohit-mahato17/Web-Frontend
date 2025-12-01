//Array in Js
//collection of item;

// console.log("hello world");

// for(let i=1;i<=101;i++){
//     console.log(i,":","Jai shri radha");
// }

// let arr=[1,2,3,4,5,6,7,8];
// // let n=arr.length;

// for(let val of arr){
//     console.log(val);
// }
 
//  console.log(arr[0]);
//  console.log(arr[1]);
//  console.log(arr[2]);
//  console.log(arr[3]);
//  console.log(arr[4]);
//  console.log(arr[5]);
//  console.log(arr[6]);
//  console.log(arr[7]);

//
// let cities=["delhi","mumbai","puna","hyderabad","gurgaon"];//\t,\n

// for(let val of cities){
//     console.log(val.toUpperCase());
// }

//
// let marks=[85,97,44,37,76,60];

// let value=0;
// for(let val of marks){
//      value += val;
// }
// let avg=value/marks.length;
// console.log(`avg marks of the array = ${avg}`);

// let arr=[250,645,300,900,50];
// for(let val of arr){
//     let offer=(val-(val/10));
//      console.log(offer);
// }

// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val} `);
//     let offer = val/10;
//     items[i] = items[i]-offer;
//     console.log(`value after offer =${items[i]}`);
//     i++;
// }

//
// let arr=[1,2,3,4,5,6,7];
//  arr.push(10);
// //  console.log(arr[7]);

// for(let val of arr){
//     console.log(val);
// } 

//
// let carcollection=["Mahindra","TATA","BMW"];
// carcollection.push("Mercedes","rolls-royce");

// // carcollection.pop();
// // carcollection.pop();
// console.log(carcollection);

//
//Array Methods;
 

// let marvelHeroes=["thor","spiderman","ironman"];
// let dcHerose=["superman","batman"];

// // let herose=marvelHeroes.concat(dcHerose);
// let herose=dcHerose.concat(marvelHeroes);
// console.log(herose);

//
// let marevalHeroes=["thor","spiderman","ironman"];

// let val=marevalHeroes.unshift("kingman");

// console.log(val);

//
// let marevalHeroes=["thor","spiderman","ironman"];
// let val=marevalHeroes.shift("kingman");
// console.log(val);

// let cake=["choclate","vinala","stobary","rasmalay"];

// let value=cake.slice(0,3);
// console.log(value);

//
// let newno=[1,2,3,4,5,6,7];
// newno.splice(1,3,101,102);
//op-> [1, 101, 102, 4, 5, 6, 7];

let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//arr.shift();  //remove the valueon the top array.
// arr.unshift("PayPal");//insert the value of first.
arr.splice(2,1,"ola");
arr.push("Amagone");
// console.log(arr);
for(let val of arr){
    console.log(val);
}
