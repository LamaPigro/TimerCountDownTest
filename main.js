import './style.css'

const startMinuti = document.getElementById("startMinuti")
const minutiTag = document.getElementById("minutiTag")
const secondiTag = document.getElementById("secondiTag")

const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")

let minuti, secondi, timerID = undefined

// stop - start - default
let status = 'default'

startBtn.onclick = () => {
	if (status === 'default') {
		status = 'start'

		// Settiamo i minuti ed i secondi
		minutiTag.style
    .setProperty('--value', startMinuti.value)
	  secondiTag.style
	    .setProperty('--value', 0)
	
	  secondi = 0
	  minuti = startMinuti.value

		// Facciamo partire effettivamente il timer
		timerID = setInterval(() => {
			if (status === 'start') {
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
			}
	  }, 1000)

		// Disabilitiamo l'input
		startMinuti.disabled = true;

		// Cambiamo lo stile ed il testo di startBtn
	  startBtn.textContent = "RIAVVIA"
	  startBtn.classList.remove("btn-success")
	  startBtn.classList.add("btn-warning")
		
	} else if (status === 'start' || status === 'stop') {
		status = 'default'

		// Ripuliamo l'interval che senno viene eseguito piú volte successivamente
		clearInterval(timerID)

		// Torniamo allo stato iniziale
		minuti = 0
		secondi = 0

		// Abilitiamo l'input
		startMinuti.disabled = false;

		// Cambiamo lo stile ed il testo di startBtn
	  startBtn.textContent = "AVVIA"
	  startBtn.classList.remove("btn-warning")
	  startBtn.classList.add("btn-success")

    stopBtn.textContent = "STOP"
	  stopBtn.classList.remove("btn-warning")
	  stopBtn.classList.add("btn-error")
	}
}

stopBtn.onclick = () => {
  if (status === 'start') {
		status = 'stop'

    stopBtn.textContent = "RIPRENDI"
	  stopBtn.classList.remove("btn-error")
	  stopBtn.classList.add("btn-warning")
    
    
	} else if (status === 'stop') {
		status = 'start'

    stopBtn.textContent = "STOP"
	  stopBtn.classList.remove("btn-warning")
	  stopBtn.classList.add("btn-error")
	}
}

/* ToDo 
- stopBtn (restart)
- disable textArea (+ no negative)
- design
*/