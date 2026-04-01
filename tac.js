let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");

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

        checkWinner();
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
        box.style.color="";
    }
    turnO=true;
};

// check winner and all logic to decide winner

let winner=document.createElement("h1");
const checkWinner= () =>{
    for(let pattern of winPatterns){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1!=""&& pos3!="" && pos3!=""){
          if(pos1===pos2 && pos2===pos3){
            console.log("winner");
            disabeledbtns();
            winner.innerText="Player With '"+ pos1 +"' is Winner";
            document.querySelector(".container").append(winner);
          }
       }
    }
};
// reset button work 
reset.addEventListener("click",() =>{
    winner.remove();
    boxes.innerText="";
    onreset();
});