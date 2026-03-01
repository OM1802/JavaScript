a();
//b(); Not possible, error

//function statement
function a(){
    console.log("A IS CALLED");
}

//function expression aka function declaration
var b=function(){
    console.log("B IS CALLED");
}

//Anonymous function function statement without a name
/*
function (){

}*/

//Named function expression
var c=function d(){
    console.log("D IS CALLED");
}

//First class funcion:The ability to use function passed as arguments or return functions
//First class citizen: ability to be used as parameters or return makes the function forst class citizen

function f(para){

}
f(c);

