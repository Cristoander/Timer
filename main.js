let tempo = new Date()

tempo.setHours(0);
tempo.setMinutes(0);
tempo.setSeconds(0);
let tempoTexto = tempo.toLocaleTimeString()
document.getElementById('createTimer').innerHTML = tempoTexto


function playTimer(){
    timer = setInterval(function(){
        tempo.setSeconds(tempo.getSeconds() + 1)
        tempoTexto = tempo.toLocaleTimeString()
        document.getElementById('createTimer').innerHTML = tempoTexto
        
}, 1000);
}

function pauseTime(){
    clearInterval(timer);
}


function zeroTimer(){
    clearInterval(timer);
    tempo.setSeconds(0);
    tempoTexto = tempo.toLocaleTimeString()
    document.getElementById('createTimer').innerHTML = tempoTexto
}

