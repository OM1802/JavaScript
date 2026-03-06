//Uisng JS create a buttton in body tag at beginning. Give it text="Click Me", backgroung color=Red and text color=White.

let body=document.querySelector("body");
let newBtn=document.createElement("button");
body.prepend(newBtn);
newBtn.innerText="CLick Me";
newBtn.style.backgroundColor="Red";
newBtn.style.color="White";
body.prepend(newBtn);

//Create a <p> tag in HTML, give it a class & some styling. Solve this problem using classList.

let para=document.querySelector("p");
console.log(para.classList);
para.classList.add("test1");
