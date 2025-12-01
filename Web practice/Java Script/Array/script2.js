// let heros=["rohit","harsh","rahul","kunal"];
// for(let index=0;index<heros.length;index++){
//     console.log(heros[index]);
// }

// let marks=[85,97,44,37,76,60];

// let sum=0;

// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

//find discount 10%
// let items=[250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);

//*array method
//push():add to end

// let froote=["mango","banana","apple","lichy"];
// froote.push("papaya");
// console.log(froote);

//pop():delete from end & return
// let froote=["mango","banana","apple","lichy"];
// let deleted=froote.pop();
// console.log("item deleted=",deleted);
// console.log(froote);

//toString():convert array to string
// let froote=["mango","banana","apple","lichy"];
// console.log(froote);
// console.log(froote.toString);

//Concat():join multiple arrays & return result
// let marvel_heros=["thor","ironman","spiderman"];
// let dc_herose=["superman","batman"];

// let herose=marvel_heros.concat(dc_herose);
// //let herose=dc_herose.concat(marvel_heros);
// console.log(herose);

//unshift():add to start
// let marvel_heros=["thor","ironman","spiderman"];
// marvel_heros.unshift("anthman"); //shift delete from start
// console.log(marvel_heros);

//Slice():return a piece of the arrray
         //slice(start,endldx)
//    let  marvelherose=["thor","ironman","spiderman","antman","kaluman"];
//    console.log(marvelherose);
//    console.log(marvelherose.slice(1,3));

//splice():change original array(add,remove,replace);
let  arr=[1,2,3,4,5,6,7];
//arr.splice(2,2,101,102);
arr.splice(2,0,101);//0 matlab delete the array value
console.log(arr);