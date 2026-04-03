let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let winner=document.createElement("h1");
const clickSound = new Audio("win sound.mp3");
const winSound= new Audio("click sound.mp3");
const resetSound= new Audio("restart.mp3");
let iswin=false;
let count=0;
let turnO = true;
// wiining patterns data
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

// input to play game 
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        clickSound.play();
        if(turnO){
            box.innerText="O";
            box.classList.add("makeblack");
            turnO=false;
        }
        else {
            box.innerText="X";
            turnO=true;
            box.classList.add("makepurple");
        }
        box.disabled=true;
        count++;
        checkWinner();
        if(count==9 && !iswin){
           winSound.play();

            winner.innerText="Game Draw! Press Reset";
            document.querySelector(".container").append(winner);
}
    });
});
// to disabeled all functions
const disabeledbtns=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
// to reset all box data and trun0 =true
const onreset= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("makepurple","makeblack");
    }
    turnO=true;
    count = 0;   
    iswin = false
};

// check winner and all logic to decide winner

const checkWinner= () =>{
    for(let pattern of winPatterns){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1!=""&& pos2!="" && pos3!=""){
          if(pos1===pos2 && pos2===pos3){
            winSound.play();
            console.log("winner");
            iswin=true;
            disabeledbtns();
            winner.innerText="Player With '"+ pos1 +"' is Winner";
            document.querySelector(".container").append(winner);
          }
       }
    }
};
// reset button work 
reset.addEventListener("click",() =>{
     resetSound.play();

    winner.remove();
    boxes.innerText="";
    onreset();
});
