import './style.css'

const startMinuti = document.getElementById("startMinuti")
const minutiTag = document.getElementById("minutiTag")
const secondiTag = document.getElementById("secondiTag")

const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")

let minuti, secondi, timerID = undefined;

startMinuti.oninput = () => {
  console.log(startMinuti.value)
  minutiTag.style
    .setProperty('--value', startMinuti.value);
  secondiTag.style
    .setProperty('--value', 0);

  secondi = 0;
  minuti = startMinuti.value;
}

startBtn.onclick = () => {
  timerID = setInterval(() => {
    secondi--
      
    if(secondi < 0) {
      secondi = 59
      minuti -= 1
    }
    
    minutiTag.style
    .setProperty('--value', minuti);
    secondiTag.style
    .setProperty('--value', secondi);

    if(minuti === 0 && secondi === 0 ){
      clearInterval(timerID)
      return
    }

    console.log(minuti, secondi)
  }, 1000)
  
}

/* ToDo 
- stopBtn
- disable textArea (+ no negative)
- allert 30 sec, 10 sec, 5 sec (change color view)
*/