/*
//HTML SCRIPT
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <h1>FRUITS</h1>
        <ul>
            <li>ORANGE</li>
            <li>WATERMELON</li>
            <li>MANGO</li>
        </ul>
    </div>
    <h1>TEST TEXT</h1>
    <h1 id="heading">DOM CONCEPTS</h1>
    <h4 class="heading">TOPIC: Starter Code</h4>
    <h4 class="heading">TOPIC: Starter Code</h4>
    <h4 class="heading">TOPIC: Starter Code</h4>
    <p>Learning about DOM's conecepts</p>
    <p>Learning about DOM's conecepts</p>
    <button>CLICK HERE!!</button>
<script src="dom.js"></script>
</body>
</html>


//CSS SCRIPT
#heading{
    color:red;
    background-color: beige;
}
.heading{
    color:rgb(35, 21, 158);
    background-color: rgb(61, 221, 13);
}
body{
    background-color: aqua;
}
h1{
    background-color: blue;
}
*/
//JS SCRIPT
let div=document.querySelector("div");
console.log(div.innerText);
console.log(div.innerHTML);

console.log(document.body);
console.dir(document.body);
//document.body.style.background = "green";
let heading=document.getElementById("heading");
console.dir(heading);
console.log(heading);

let heading2=document.getElementsByClassName("heading");
console.dir(heading2);
console.log(heading2);

let para=document.getElementsByTagName("p");
console.log(para);
console.dir(para);

let felements=document.querySelector("p");
console.dir(felements);

let allelements=document.querySelectorAll("p");
console.dir(allelements);

let classElements=document.querySelector(".heading");
console.dir(classElements)
