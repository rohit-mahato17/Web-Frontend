const alluser=[
    {
        firstname:"rohit",
        gender:"male"
    },
    {
        firstname:"rohan",
        gender:"male"
    },
    {
        firstname:"russion",
        gender:"femal"
    }
]

for(let i=0;i<alluser.length;i++){
    if(alluser[i] ["gender"]=="male"){
        console.log(alluser[i]["firstname"])
    }
}
