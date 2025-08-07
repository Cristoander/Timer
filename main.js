let tempo = new Date()
tempo.setHours(0);
tempo.setMinutes(0);
tempo.setSeconds(0);
tempo = tempo.toLocaleTimeString()

document.getElementById('createTimer').innerHTML = tempo
