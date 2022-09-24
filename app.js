let entriesDOM = document.getElementById("entries");
let errorMsgDOM = document.getElementById("errorMsg");
let winnerMsgDOM = document.getElementById("winnerMsg");
let routletteBtnDOM = document.getElementById("roulette");
let addBtnDOM = document.getElementById("add-card");
let btnsDiv = document.getElementById("btns-div");
let randomWinner = '';

let idCount = 3;
let grey = "grey1";

function addAnotherCard() {
  if(idCount <= 5){
    const newDiv = document.createElement("div");
    newDiv.className = `flex-row ${grey}`;
    greys();
    newDiv.innerHTML = `
            <div class="num">${idCount}.</div>
            <div>
                <label for="name" >Name:</label>
                <input type="name" id=${idCount}>
            </div>
            <div>
                <label for="name">Credit Card Number:</label>
                <input type="name" placeholder="XXXX-XXXX-XXXX" disabled>
            </div>
          `
          entriesDOM.appendChild(newDiv);
    idCount++;
  }
}

function greys(){
grey === "grey1" ? grey = "grey2": grey = "grey1";
}
function randomize(){
  if(checkValidityofInPuts()){
    const randomNum = Math.floor(Math.random() * (idCount-1))+1;
    randomWinner = document.getElementById(`${randomNum}`).value;
    
    display(winnerMsgDOM,`Sorry ${randomWinner}, you were randomly selected. Pay up!`,"winnerMsgStyle");

  }else{
    display(errorMsgDOM,"Must enter a name and credit card number for each player!","errorMsgStyle");
  }
  
}

function checkValidityofInPuts(){
  for(let i=1; i<=(idCount-1);i++){
    if(document.getElementById(`${i}`).value === "" || document.getElementById(`${i}`).value === null){
        return false;
    }
  }
   return true;
}

function display(status, msg, stlye){
  routletteBtnDOM.disabled = true;
  addBtnDOM.disabled = true;
  status.className = stlye;
  status.innerText = msg;
  if(status===errorMsgDOM){
    setTimeout(clear,4000);
  }else{
    nextStepsAfterWinner();
  }
}


function clear(){
  routletteBtnDOM.disabled = false;
  addBtnDOM.disabled = false;
  errorMsgDOM.className = "";
  errorMsgDOM.innerText = "";
  winnerMsgDOM.className = "";
  winnerMsgDOM.innerText = "";
}

function nextStepsAfterWinner(){
  btnsDiv.innerHTML = 
  `
  <a href="/tipCalc/tipCacl.html">Calculate Tip</a>
  `
}