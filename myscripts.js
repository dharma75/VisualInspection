const LED_yellow = " background-color: #FF0"; 
const LED_red = " background-color: #F00"; 
const LED_green = " background-color: #4CAF50"; 

const capbutton = document.getElementById("capbutton")
capbutton.addEventListener("click", capbuttonclick);

const chkbutton = document.getElementById("chkbutton")
chkbutton.addEventListener("click", chkbuttonclick);

const led = document.getElementById("led")

function capbuttonclick(){
    alert("capturebutton clicked")
}

function chkbuttonclick(){    
    result = 0
    if (result==0){
        alert("check clicked")
        led.style.cssText = LED_red;
        showConfirmBox();
    }
}

function showConfirmBox() {
    document.getElementById("overlay").hidden = false;
  }
  function closeConfirmBox() {
    document.getElementById("overlay").hidden = true;
  }

  function resultuserack(ack) {
    if (ack == 0) {
      alert("user click yes");
    } 
    if (ack == 1) {
      alert("user click no");
    }
    if (ack == 2) {
        alert("user click cancel");
      }
    closeConfirmBox();
  }
  
