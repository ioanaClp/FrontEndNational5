document.getElementById('start').addEventListener('click', startTime);
document.getElementById('stop').addEventListener('click', stopTime);
const timerEl = document.getElementById('timer');

let seconds = 0;
let minutes = 0;
let intervalId;
let timeIsRunning = false;

function showTime() {
	seconds++;
	if (seconds == 60) {
		seconds = 0;
		minutes++;
	}

	if (minutes == 60) {
		minutes = 0;
	}

	timerEl.innerHTML = formatTime(minutes) + ':' + formatTime(seconds);
	document.getElementById('start').disabled = true;
}

function formatTime(time) {
	return time < 10 ? '0' + time : time;
}

function startTime() {
	intervalId = setInterval(showTime, 1000);
	timeIsRunning = true;
}

function stopTime() {
	clearInterval(intervalId);
	timeIsRunning = false;
	document.getElementById('start').disabled = false;
}
