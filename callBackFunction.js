//callback function: function passed on as argument
setTimeout(function (){//callback function
    console.log("TIMER");

},5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){//y() is a callback function here
    console.log("y");
});
