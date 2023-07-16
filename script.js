console.log("welcome to tic tak toe")
let turn=new Audio("turn.mp3")
let gameover=new Audio("gameover.wav")
let isgameover=false

let turn1="X"
const changeTurn=()=>{
    return turn1==="X"? "0":"X";

}


const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" WON"
            isgameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            gameover.play();
        }
    
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn1;
           turn1= changeTurn();
            turn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for"+turn1;}
        }
        
    })
})
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn1="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for"+turn1;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})