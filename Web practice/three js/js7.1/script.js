// let btn1 = document.querySelector("#contant");

// btn1.onclick = (evt) => {
//     // console.log("clicked successfull");
//     console.log(evt);
//     // let a=25;
//     // a++;
//     // console.log(a);

// };

// let box = document.querySelector("div");
 
// box.onmouseover = () =>{
//   console.log("you are inside box");
// }


let morning = document.querySelector("#mode");  // selects button/icon/etc. with id="mode"
let body = document.querySelector("body");      // selects the body element
let currmode = "light";



morning.addEventListener("click", () => {
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
    
});

