/*console.log("A");
console.log("B");

setTimeout(()=>{
    console.log("HI, HOW YA DOING?");
},3000);

console.log("C");

function sum(a,b){
    console.log(a+b)
};

function cal(a,b,callbackSum){
    callbackSum(a,b);
};

cal(25,52,sum);

function getData(dataid,delay){
    setTimeout(()=>{
        console.log("DATA",dataid);
    },delay);
};

for(var i=1001;i<=1003;i++){
    getData(i,(i-1000)*2000);
};*/

function getData(dataid,nextGetData){
    setTimeout(()=>{
        console.log("DATA",dataid);
        if(nextGetData){
            nextGetData();
        }
    },2000);
};

//CALLBACK HELL
getData(101,()=>{
    console.log("FETCHING DATA...");
    getData(102,()=>{
        console.log("FETCHING DATA...");
        getData(103,()=>{
            console.log("FETCHING DATA...");
            getData(104);
        });
    });
});
