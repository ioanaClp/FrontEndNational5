document.getElementById('start').addEventListener('click', startTime);
document.getElementById('stop').addEventListener('click', stopTime);

let seconds = 0;
let minutes = 0;
let intervalId;

function showTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    let timerEl = document.getElementById('timer');
    timerEl.innerHTML = formatTime(minutes) + ':' + formatTime(seconds);

}

function formatTime(time) {
    // if(time < 10) {
    //     return '0' + time;
    // }

    return time < 10 ? '0' + time : time;
}

function startTime() {
    // setInterval(callback, time);
    intervalId = setInterval(showTime, 1000);
    console.log(intervalId);
}

function stopTime() {
    clearInterval(intervalId);
}