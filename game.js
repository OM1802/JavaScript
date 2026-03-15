let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetBtn");
let newGame=document.querySelector("#newGameBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        //box was pressed
        if(turnO){
            box.style.color="#00ADB5";
            box.innerText="O";
            turnO=false;
        }
        else{
            box.style.color="#BF092F";
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner= (winner) => {
    msg.innerText=`THE WINNER IS ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val ==pos2val && pos1val==pos3val){
                showWinner(pos1val);
            }
        }

    }
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
