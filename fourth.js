//PRACTICE QUESTIONS FOR ARRAY

let arr=[85,97,44,37,76,60];
let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
console.log("THE AVERAGE IS: ",sum/arr.length);

let a=[250,645,300,900,50];
for(let i=0;i<a.length;i++){
    a[i]=a[i]-(a[i]/100)*10
}
console.log("AFTER DISCOUNT OF 10%, THE NEW ARRAY IS: ",a);

let marvel=["THOR", "SPIDERMAN", "DEADPOOL", "MAGNETO"];
marvel.unshift("WOLVERINE")
console.log(marvel)
let d=marvel.shift();
console.log(d)
