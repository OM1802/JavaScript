function outest() {
    var c = 20;

    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        var a = 10;
        return inner;
    }
    return outer;
}

var a = 100;
var close = outest()("helloworld");
close();

/*
OUTPUT:

10 helloworld 20


*/
