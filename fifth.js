//FUNCTIONS

function myfunction(){
    console.log("FUNCTION CALLED!!")
}
myfunction();

function plus(a,b){
    let s=a+b
    return s

};
console.log(plus(10,105))

//ARROW FUNCTIONS

let summ=(a,b)=>{
    return a+b
};
console.log(summ(5,10))

//PRACTICE QUESTION

function vowels(string1){
    let count=0;
    for (let i=0; i<string1.length;i++){
        if (string1[i]=="A" || string1[i]=="E" || string1[i]=="I" || string1[i]=="O" || string1[i]=="U" || 
        string1[i]=="a" || string1[i]=="e" || string1[i]=="i" || string1[i]=="o" || string1[i]=="u"){
            console.log(string1[i],", ");
            count++;
        }

    }
    console.log("NUMBER OF VOWELS ARE: ",count);
}

vowels("OM JAISWAL");

let countVowels=(str1)=>{
    let count=0;
    string1=str1;
    for (let i=0; i<string1.length;i++){
        if (string1[i]=="A" || string1[i]=="E" || string1[i]=="I" || string1[i]=="O" || string1[i]=="U" || 
        string1[i]=="a" || string1[i]=="e" || string1[i]=="i" || string1[i]=="o" || string1[i]=="u"){
            console.log(string1[i],", ");
            count++;
        }

    }
    console.log("NUMBER OF VOWELS ARE: ",count);
};

countVowels("OM JAISWAL");

//ForEach Loop in Arrays, HIGHER ORDER FUNCTION SINCE IT CAN TAKE A FUNCTION AS A PARAMETER OT RETURN A FUNCTION

let arr0=["INDIA","RUSSIA","USA","CHINA"];
arr0.forEach((val, idx) => {
    console.log(val.toLowerCase(), idx);
});

//PRACTICE QUESTION

let calSquare=(val)=>{
    console.log(val*val);//PRINTING SQUARES
}
let nums=[1,2,3,4,5];

nums.forEach(calSquare);
