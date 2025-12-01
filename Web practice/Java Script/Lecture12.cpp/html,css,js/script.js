//let div=document.querySelector("div");

//div.style.backgroundColor="green";
////div.style.visibility="hidden";

//div.style.fontSize="29px";

//div.innerText="Hello!";  

let newBtn=document.createElement("button");
newBtn.innerText="Click!";
console.log(newBtn);

let div=document.querySelector("div");
//div.append(newBtn);

div.after(newBtn);