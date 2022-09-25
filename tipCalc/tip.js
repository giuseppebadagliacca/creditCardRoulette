let displayDivDOM = document.getElementById('display-div');

function calculateTip(){
  if(validateInputs()){
    const ele = document.getElementsByName("percent");
    const billAmountDOM = Number(document.getElementById('bill-amount').value);
  
    let selectedPercentage;
    // console.log(ele);
    for(let i=0;i<ele.length;i++){
      if(ele[i].checked){
        selectedPercentage =  Number(ele[i].id);
      }
    }
    const bill = billAmountDOM.toFixed(2)
    const tip = (billAmountDOM * selectedPercentage).toFixed(2);
    const grandTotal = ((billAmountDOM * selectedPercentage) + billAmountDOM).toFixed(2);

    display(`Bill Amount: $${bill}\nTip Amount: $${tip}\nGrand total: $${grandTotal} \nPay up!`, "winnerMsgStyle", false);
  }else{
    display('Must enter both bill amount and tip percentage!', "errorMsgStyle", true);
  }

}

function validateInputs(){
  const ele = document.getElementsByName("percent");
  let percentage = false;
  for(let i=0;i<ele.length;i++){
    if(ele[i].checked){
      percentage = true;
    }
  }
  return (percentage && document.getElementById('bill-amount').value) ? true:false;
}

function display(msg, stlye, clear){
  displayDivDOM.className = stlye;
  displayDivDOM.innerText = msg;
  if(clear){
    setTimeout(clearDisplay,4000);
  }
}

function clearDisplay(){
  displayDivDOM.className = "";
  displayDivDOM.innerText = "";
}