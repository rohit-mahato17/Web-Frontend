// console.log("jai shri radha");

//Fution in Js

// function call(){
//       console.log("funtion call");
// }
// for(let i=1; i<=7; i++){
//    call();
// }
// function sum (x,y){
//       let a=x+y;
//       // console.log("Print the value of sum:",a);
//       return a;
// }

// let val=sum(3,3);
// console.log(val,"The program value is of sum :");

// function statement(arr,n){
     
//       for(let i=0; i<n; i++){
//             console.log(arr[i]);
//       }
// }
// let arr=[1,2,3,4,5,6];
// let n= arr.length;
// // console.log(n);
// statement(arr,n);

// let arr=[1,2,3,4,5,6];
// // console.log(arr.join(" "));
// console.log(arr);
// let arr=[4,2,1,3,8,5];
// arr.sort((a,b) => a - b );
// console.log(arr);


// function stringcall(str){
//     let count=0;
//     for(let i of str){
//            if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
//             count++;
//            }
//     }
//     return count;
// }

// let str="funtion";

//  let val=stringcall(str);
//  console.log("Total no of vovels present in string: ",val);

// const stringcall =(str) =>{
   
//     let count=0;
//     for(let i of str){
//            if(
//             i == 'a' || 
//             i == 'e' || 
//             i == 'i' || 
//             i == 'o' || 
//             i == 'u'
//         ) {
//             count++;
//            }
//     }
//     return count;

// };

//for eachloop
// let arr=[1,2,3,4,5];

// arr.forEach(function printvalue(val){
// console.log(val);
// });

//
// let arr=["a","bc","def","ghij","klmno","pqrstu"];

// arr.forEach((val,idx)=>{

// console.log(val.toUpperCase(),idx);
// });

// let arr=[5,6,7,8,5,4];

// arr.forEach((val)=>{
//     console.log(val*val);

// });

//1
// let marks=[97,64,32,49,99,86];

// let topper = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(topper);

//2
let n=prompt("Enter a numbers:");

let arr=[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(sum);
