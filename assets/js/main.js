function getTimeFromSecounds(segundos) {
    const data = new Date(seg * 1000);
    return data.getSeconds();
}

const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
let seg = 0;
let min = 0;
let hr = 0;
let timer;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        if (seg < 59) {
            if (seg < 10) seg = '0' + seg;
            seg++;
            segundos.innerHTML = getTimeFromSecounds(seg);
        } else if (min < 59) {
            seg = 0;
            segundos.innerHTML = getTimeFromSecounds(seg);

            min++;
            minutos.innerHTML = min;
        } else if (hr < 59) {
            seg = 0;
            segundos.innerHTML = getTimeFromSecounds(seg);

            min = 0;
            minutos.innerHTML = min;

            hr++;
            horas.innerHTML = hr;
        }

    }, 1000);
}

function zerar() {
    clearInterval(timer);
    seg = '0' + 0;
    segundos.innerHTML = seg;
    min = '0' + 0;
    minutos.innerHTML = min;
    hr = '0' + 0;
    horas.innerHTML = hr;
}

function stop() {
    clearInterval(timer);
}