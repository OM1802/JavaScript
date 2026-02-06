//SINGLE LINE COMMENT
/*
MULTI LINE COMMENT
*/

//comparison operators

a=5
b="5"
console.log("A==B",a==b);
console.log("A==B",a===b);

//conditional statements

let age=22;
if(age>=18){
    console.log("YOU ARE ELIGIBLE TO VOTE!")
}
else if(age<18){
    console.log("YOU ARE NOT ELIGIBLE TO VOTE!")
}


let n=-17289
if (n>0){
    if (n%2==0){
        console.log("NUMBER IS POSITIVE AND EVEN")
    }
    else if(n%2!=0){
        console.log("NUMBER IS POSITIVE AND ODD")
    }
}
else if(n<0){
    if (n%2==0){
        console.log("NUMBER IS NEGATIVE AND EVEN")
    }
    else if(n%2!=0){
        console.log("NUMBER IS NEGATIVE AND ODD")
    }
}
else{
    console.log("NUMBER IS ZERO")
}

//ternary operator
age>=18 ? console.log("ADULT") : console.log("CHILD")

