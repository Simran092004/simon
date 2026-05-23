let gameSeq=[];
let userSeq=[];
let levels=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let highestScore = 0;

document.addEventListener("keypress", function () {
    if(started===false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level} `;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn =document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    
}
function largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++)
        if (arr[i] > max)
            max = arr[i];

    return max;
}
function checkAns(ind){
    if (userSeq[ind]=== gameSeq[ind]){
    if (userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
    }
    else{
        levels.push(level);
        highestScore=largest(levels);
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press Any key to Start Again `;
        h3.innerHTML=`<b>HIGHEST SCORE : ${highestScore}</b>`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}
function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}