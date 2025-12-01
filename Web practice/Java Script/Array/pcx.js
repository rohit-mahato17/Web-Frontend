// const a=[10,20,100,10,50,100,40];
// let sizef=a.length-1;

// for(let i=0;i<sizef;i++){
//       for(let k=1;k<=sizef;k++){
//             if(a[i]==a[k+i]){
//                 console.log(a[i]);
//             }else{
//                 continue;
//             }
//       }
            
// }
  
// let a=12;
// let b=22;
// let num = a+b;
// let num1 = a-b;
// let num2 = a/b;
// let num3 = a%b;
// console.log("value of both variable a and b:",a+b);
// console.log("value of both variable num:",num);
// console.log("value of both variable num:",num1);
// console.log("value of both variable num:",num2);
// console.log("value of both variable num:",num3);

//condition statement

// let age=35;

// if(age<18){
//     console.log("junior");
// }else if(age<=30){
//     console.log("middle");
// }else{
//     console.log("seniore");
// }

//2nd?

// let mode="black";
// let color;

// if(mode === "blue"){
//     color="read";
// }else if(mode === "pink"){
//     color="pink";
// }else if(mode === "yello"){
//     color="yrllo";
// }else{
//     color="not mached";
// }
// console.log("The color of mode is:",color);


//ternary operators


// let age=10;
// let result;

// result=age>=18 ? "old":"gold";
// console.log(result);


// alert("hello to google");one time popo

// promot 1st
// let name = prompt("What's your name?", "Guest");
// console.log("Hello, " + name + "!");
// let n=5;

//   for(let i=1;i<=n;i++){
// let num=prompt("Enter aney number");
// if(num%5==0){
//     console.log(num,"is multiply of 5");
// }else{
//     console.log(num<"is NOT a multiply of 5");
// }
//   }


// promot 2nd
// let score=prompt("Enter the scor:");

// if(score >= 90 &&  score <=100){
//        console.log("A grade");
// }else if(score >= 70 &&  score <=89){
//     console.log("B grade");
// }else if(score >= 60 &&  score <=69){
//     console.log("C grade");
// }else if(score >= 50 &&  score <=59){
//     console.log("D grade");
// }else{
//     console.log("E geade");
// }


// let a=3+2+"7";
// console.log(a);

//(5) isNaN
// let value="good player";

// if(isNaN(value)){
//     console.log("The value is not a number");
// }else{
//     console.log("The value is a number");
// }

//lecture-3;
// Loops in js

//  let n=5;
//  let sum=1;
// for(let count=1;count<=n;count++){
//     sum*=count;
// }
// console.log("The value of sum is:",sum);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=5);

// let num=100;

// for(let item=1;item<=num;item++){
//     if(item%2==0){
//         console.log("even number:",item);
//     }else{
//         console.log("odd number:",item);
//     }
// }

//game of the program 
// let gameno=25;

// let userno=prompt("Enter aney user no:");

// while(userno != gameno){
//     userno=prompt("Ronge,again enternumber:"); 
// }
// console.log("congurase ot win the mached");


//  let str="string";

//  for(let o=0;o<str.length;o++){
//     console.log(str[o]);
//  }

//string method in js

// let string="human killer";
// let   hum=string.toUpperCase();
// console.log(hum);

// let string="HUMAN KILL";
// let   hum=string.toLowerCase();
// console.log(hum);

//str.trime() method//

// let str="   Apnacolage";
// console.log(str.trim());

// str.slice() method//

// let str1="mountain";
// let str2=" duck";
// console.log(str1.concat(str2));

// let name=prompt("Enter the number");
// let fullname= '@'+name+name.length;
// console.log(fullname);

//Array in js
// let marks=[10,20,30,40,50,60];
// let sum=0;

// for(let val of marks){
//     sum+=val;
// }
// console.log(sum);

// let item=[250,645,300,900,50];

// for(let val of item){
//     let offer=val/10;
//     val=val-offer;           //same1 different formate
//     console.log(val);
// }

// for(let i=0;i<item.length;i++){
//      let offer=item[i]/10;
//      bom=item[i]-offer;             //same2 different formate
//     console.log(bom);
     
// }

// let food=["mango","orange","banana","lichi"];
// food.pop();
// console.log(food);

// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);

// let companies=["bloomberg","Microsoft","Uber","Google","Ibm","netflix"];
// companies.push("Amazone");
// console.log(companies);

//Funtion in js 

// function myfuntion(){
//     console.log("welcome to appna collage");
//     console.log("mongodb also");
// }

// myfuntion();
// myfuntion();
// myfuntion();
// myfuntion();

// function myfuntion(msg){ //psrameter
//     console.log(msg);
// }

// myfuntion("full stake development");//argument


// function sum(x,z){
//  let val=x+z;
//  return val;
// }
// let hus=sum(10,91);
// console.log(hus); 


// function string(val){
//     let count=0;
//     for(let vovel=0;vovel<val.length;vovel++){
//     if(val[vovel]=='a'||val[vovel]=='e'||val[vovel]=='i'||val[vovel]=='o'||val[vovel]=='u'){
//         console.log(val[vovel]);
//          count++;
// }
//     }
//     console.log("vovels are present:",count);
// }
// string("hello");


//forEach funtion
  
// let arr=[45,46,48,39];
// let sum=1;
// arr.forEach((val) => {
//     sum*=val;
// });
// console.log(sum);

// let arr=[1,2,3,4,5,6,8];

// let oddno=arr.filter((val)=>{
//    return val%2!==0;
// });
// console.log(oddno);


//Lecture 6;
//DOM
// alert("hello");
// console.log("thumsub");
    // let n=5;

    // let sum=0;
    // let i=1;

    // do{
    //     console.log("jai shri radha");
    //     i++;
    // }while(i<=n);

    // let str="Javascript";

    // let size=0;
    // for(let i of str){
    //     console.log("i=",i);
    //     size++;
    // }

    // console.log("size of string:",size);
    
    // let n=100;

    // for(let i=0; i<=n; i++){
    //     if(i%2 == 0){
    //         console.log("even numbet=",i);
    //     }else{
    //         console.log("odd number=",i);
    //     }
    // }

    // let gameNumber=25;

    // let userNum=prompt("Guess the number: ");

    // while(userNum != gameNumber){
    //     userNum=prompt("You enter guess the anothe number:");
    // }

    // console.log("congratulation you are select right number");

    // let arr=[1,2,3,4,6,5,6,7,8,2,5];

    // let n=arr.length;

    // // console.log(n);
    
    // for(let i=0; i<n-1; i++){
    //      for(let j=i+1; j<n; j++){
    //         if(arr[i] == arr[j]){
    //             console.log(arr[i]);
    //         }
    //      }
    // }
    // console.log("jai shri radha");

    // let a=100;
    // const b= a++ + ++a; // 100 + 101= 102
    // console.log(b);


  //(using for string and array)
    
  // let str="javascript";

    // let sizeof=0;
    // for(let i of str){
    //     console.log("i=",i);
    //     sizeof++;
    // }

    // console.log("Tota size of string is: ",sizeof);

//(using for Object forloop);

// let student = {

//         name: "Ramesh kumar",
//         age: 20,
//         cgpa:7.5,
//         ispass:true,

// };

// for(let key in student){
//       console.log("key=", key);

// }

// let str="Apna college";
// let str1="Roit mahato";
// let str2="grand finalay";
// let str3="final";
// let str4="goto funtion";
 
//string 
// let specialString=`This is a template literal`;
// console.log(typeof specialString);

// let str="Apna\tcollage";
// console.log(str.length);

// let scr="source\tcode\tapna\tcoolage";
// console.log(scr.length);

// let srt="goto\tfuntion";
// console.log(str.length);

// let row="ro\nws";
// console.log(row.length);

// let col="cou\tlam";
// console.log(col.length);

// let str="abc";
// let to=" ABC ";
// let n=str.toUpperCase();
// let b=to.toLowerCase();
// let c=to.trim();
// console.log(n);
// console.log(b);
// console.log(c);

//(string Methods in js)
//
// let str="thing";
// console.log(str.slice(0,4));

//
// let str="I am ";
// let str2="Learing ";

// let res= str + str2 + "Javascript";
// console.log(res);

//
// let str="hellololo";
// console.log(str.replaceAll("lo","p"));

//
// let str="I love Javasctipt";

// console.log(str.charAt(4));

//
// let str="I love Javasctipt";
// str=str.replace("I","S");
// console.log(str);

// let s="I Love Javascript";
// s=s.replace("I","J");
// console.log(s);

//
// let str="shardhaKhapra";
// console.log("@"+str+str.length);

// let color;
// let mode="blue";
// if(mode === "dark-mode"){
//   color = "black";
// }else if(mode == "black"){
//     color="read";
// }else if(mode == "red"){
//   color="yello";
// }else if(mode == "yello"){
//   color="waTER";
// }else{
//   console.log("Color are not present",mode);
// }

// console.log(color);

// let age=25;

// if(age < 18){
//   console.log("junior")
// }else if(age > 60){
//   console.log("senior")
// }

// else{
//   console.log("middle");
// }

// let ages=age > 18 ? "adult" : "not adult";
// console.log(ages);

// let grade=45;


// if(grade >= 80 && grade <= 100){
//   console.log("A");
// }
// else if(grade >= 70 && grade <= 89){
//   console.log("B");
// }
// else if(grade >= 60 && grade <= 69){
//   console.log("c");
// }
// else if(grade >= 50 && grade <= 59){
//   console.log("D");
// }
// else if(grade >= 0 && grade <= 49){
//   console.log("curect your mistake");
// }