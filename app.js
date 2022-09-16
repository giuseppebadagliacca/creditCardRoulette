let entriesDOM = document.getElementById("entries");
let errorMsgDOM = document.getElementById("errorMsg");
let winnerMsgDOM = document.getElementById("winnerMsg");

let idCount = 3;

function addAnotherCard() {
  if(idCount <= 10){
    entriesDOM.innerHTML += `
     <div class="flex-row">
            <div>${idCount}.</div>
            <div>
                <label for="name" >Name:</label>
                <input type="name" id=${idCount}>
            </div>
            <div>
                <label for="name">Credit Card Number:</label>
                <input type="name" placeholder="XXXX-XXXX-XXXX" disabled>
            </div>
        </div>
    `
    idCount++;
  }
}

function randomize(){
  if(checkValidityofInPuts()){
    const randomNum = Math.floor(Math.random() * (idCount-1))+1;
    const randomWinner = document.getElementById(`${randomNum}`).value;
    
    display(winnerMsgDOM,`Sorry, ${randomWinner}, pay up!`,"winnerMsgStyle");

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
  status.className = stlye;
  status.innerText = msg;
  setTimeout(clear,4000);
}


function clear(){
  errorMsgDOM.className = "";
  errorMsgDOM.innerText = "";
  winnerMsgDOM.className = "";
  winnerMsgDOM.innerText = "";
}