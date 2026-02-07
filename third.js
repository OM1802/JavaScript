//FOR LOOP

for(let i=0;i<5;i++){
    console.log("HELLO REALITY")
}

//WHILE LOOP

let j=0;
while(j<5){
    console.log("START YOUR JOURNEY!")
    j++;
}

//DO-WHILE LOOP

let k=0;
do{
    console.log("DEFEAT YOUR ENEMIES")
    k++
}while(k<5)

//FOR-OF LOOP

let str="DEFEAT THEM!";
let size=0
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("SIZE: ",size)

//FOR-IN LOOP

let student={
    name:"Om Jaiswal",
    class:"D2203",
    age:22,
    cgpa:7.7
};
for (let i in student){
    console.log("key:",i, "value:",student[i]);
}

//PRACTICE QUESTION
//0 to 100 all even numbers

for(let i=0;i<=100;i+=2){
    console.log(i);
}

//TEMPLATE LITERAL

let s=`TEMPLATE \nLITERAL`
console.log(s,typeof s)

let obj={
    item:"pen",
    price:100
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//PRACTICE QUESTION\

let fname=prompt("ENTER YOUR FULL NAME");
let uname="@"+fname+(fname.length);
console.log("YOUR USER NAME IS:",uname.toLowerCase());
