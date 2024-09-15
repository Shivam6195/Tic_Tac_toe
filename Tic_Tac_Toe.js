let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".newGame");
let msg=document.querySelector(".msg");
let msg2=document.querySelector(".msg2");

let turn0=true;// playerX, playerY
const winPatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],

];

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box is clicked");
        if(turn0)// turn of X player
        {
            box.innerText="X";

            turn0=false;

        }
        else{   // turn of Y player
            box.innerText="O";
            turn0=true;

        }
        box.disabled=true;
       
        checkWinnner();
    })   
});


const showWinner=(winner)=>{
    // msg2.innerText=`Congratulation Winner is ${winner}`;
    msg.classList.remove("hide");
    boxDisable();
};

const boxDisable = () =>{
    for( let box of boxes)
    {
        box.disabled=true;
    }
};
const boxEnable = () =>{
    for( let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};


const  checkWinnner=() =>{
    for(let pattern of winPatterns){
        
            let possition1=boxes[pattern[0]].innerText;
            let possition2=boxes[pattern[1]].innerText;
            let possition3=boxes[pattern[2]].innerText;

        if(possition1 !=""&& possition2 !=""&&possition3 !=""){
            if(possition1===possition2&&possition2===possition3)
            {
                console.log("WINNER is "+ possition1);
                boxDisable();
                showWinner(possition1);
                    


            }
        }
    }
};


const resetGame = () =>{
   turn0=true;
   boxEnable();
   msg.classList.add("hide");


};

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
