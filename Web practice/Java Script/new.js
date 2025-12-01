// console.log("Hello");
// console.log("World");

// let gamenum = 25;
// let username = prompt("Guest the game number :");
// console.log(username);
//..................
//for-of loop

// let str="workhard";
// for(let i of str){//itreator-characters
//     console.log("i=",i);
// }console.log("helloman");

//..................

// let str="helloman";

// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=",size);

//......................

// let student={
//         name: "rahul kumar",
//         age:20,
//         cgpa:7.5,
//         ispass: true,
//     };
//     for(let i in student){
//         console.log(i,":",student[i]);
//     }

//...........................

// let  gamenum=25;
// let username=prompt("guest game number")
// console.log(username);
//...................

let gamenum=25;
let usernum=prompt("Guess the game number");

while(usernum != gamenum){
    usernum=prompt("You enter rong number.Guess agsin");
}
console.log("Congratulations,you entered the right number");