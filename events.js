btn1=document.querySelector("#btn1");
/*var a=0;
btn1.onclick=(e1)=>{
    console.log(e1);
    console.log(e1.type);
    console.log(e1.target);
    console.log(e1.clientX, e1.clientY);
    console.log(++a);
}*/

btn1.addEventListener("click",(e1)=>{
    console.log("BUTTON WAS CLICKED")
    console.log(e1.type);
})

var count=0;
btn1.addEventListener("click",(e2)=>{
    
    console.log(++count);
})

div=document.querySelector("#box");
/*div.onmouseover=(e2)=>{
    console.log(e2);
    console.log("YOU ENTER BOX")
    console.log(e2.type);
    console.log(e2.target);
    console.log(e2.clientX, e2.clientY);
    console.log(++a);
}*/
div.addEventListener("onmouseover",(e2)=>{
    console.log("YOU ENTERED BOX");
    console.log(e2.target);
})