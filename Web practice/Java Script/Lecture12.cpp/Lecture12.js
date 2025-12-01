// console.log("Jai shri radha");


// function development(n){
// for(let i=0; i<n; i++){
//      console.log("Jai shri radha");
// }
// }; 
// let n=1000;
// development(n);

//synchronous

// console.log("one");
// console.log("Two");
// console.log("Three");


//funtion
// function hello(){
//     console.log("Hello");
// }

// setTimeout(hello, 4000);

//Aysynchronous
//new funtion
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000); //timeout;

// console.log("three");
// console.log("four");


//Callback
//a callback is a funtion passed as an argument to another funtion.

// function sum(a,b){
//      console.log(a+b);
// }

// function calculater(a,b,sumcallback){
//     sumcallback(a,b)
// }

// calculater(1,2,sum); 

// function getdata(dataID){
//     setTimeout(() => {
//         console.log("data",dataID);
//     }, 3000);
// }

// getdata(1);
// getdata(2);
// getdata(3);


//IMP
// function getData(dataId,getNextData){

//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1,() =>{
//     getData(2);
// })


//IMP
// function getData(dataId,getNextData){

//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
//callback hell
// getData(1,() =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4);
//         });
//     });
    
// });


//Promises
// Pomise is for "eventual" completion of task.it is an object in js.
//it is a solution to callback hell.

// let promise = new Promise( (resolve,reject) =>{
//     console.log("I am a Promice");
//     // resolve(123);
//     reject("some errore");
// });

// function getData(dataId,getNextData){

//    return new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//    });
// }

// function getData(dataId,getNextData){

//    return new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         console.log("data",dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//    });
// }
 

// const getPromise = ()=>{
//     new Promise ((resolve,reject)=>{
//         console.log("I am a Proomise");
//         // resolve("sucess");
//         reject("error");
//     });
// };
 
// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch(() => {
//     console.log("rejected");
// });
 

// console.log("jai shri radha");

// function hello(){
//     console.log("hello");
// }

// setTimeout(() =>{
//    console.log("hello");
// },4000);

// hello();

//Async-Await
// function getData(dataID){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             console.log("data", dataID);
//             resolve("sucess");
//         },2000);
//     });
// }

// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//      console.log("getting data1...");
//     await getData(2); 
//     console.log("getting data2...");
//     await getData(3);
//     console.log("getting data3...");
//     await getData(4);
//     console.log("getting data4...");
// }
