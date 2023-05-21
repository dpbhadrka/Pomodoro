//Call below function when click on Pomodoro
function pomoDoro() {
  if (seconds < 60) {
    alert("The timer is still running, are you sure you want to switch?");
  }

  //Changing the qoute.
  document.getElementById("quote").innerHTML = "#Time to focus!";
  document.getElementsByTagName("title")[0].innerHTML =
    "25:00 - Time to focus!";

  //Changing the bg-color.
  document.body.style.backgroundColor = "#1A1A2E";

  //Adding the active clss and remove the class from other if available.
  document.getElementById("first").classList.add("active");
  document.getElementById("third").classList.remove("active");
  document.getElementById("second").classList.remove("active");

  document.getElementById("Seconds").innerHTML = "00";
  document.getElementById("clickMe").innerHTML = "Start";
  clearInterval(stop);

  //Variables according to the pomodoro timer.
  document.getElementById("Minutes").innerHTML = 25;
  originalSeconds = 60;
  minutes = 25;
  seconds = 60;
  originalMinutes = 25;
}

//Call below function when click on Short Break
function shortBreak() {
  if (seconds < 60) {
    alert("The timer is still running, are you sure you want to switch?");
  }
  document.getElementById("quote").innerHTML = "#Time for a break!!";
  document.getElementsByTagName("title")[0].innerHTML =
    "05:00- Time for a break!!";

  //Adding active class and remove from other.
  document.getElementById("third").classList.remove("active");
  document.getElementById("first").classList.remove("active");
  document.getElementById("second").classList.add("active");

  //Changing background color.
  document.body.style.backgroundColor = "#16213E";
  document.getElementById("Seconds").innerHTML = "00";
  document.getElementById("clickMe").innerHTML = "Start";

  //Variables according to the shortbreak.
  clearInterval(stop);
  originalSeconds = 60;
  seconds = 60;
  originalMinutes = "05";
  minutes = 5;
  document.getElementById("Minutes").innerHTML = "05";
}

//Call below function when click on Long Break
function longBreak() {
  if (seconds < 60) {
    alert("The timer is still running, are you sure you want to switch?");
  }

  //Changing the quote.
  document.getElementById("quote").innerHTML = "#Time for a break!!";
  document.getElementsByTagName("title")[0].innerHTML =
    "15:00 - Time for a break!!";

  //Adding the active class and remove from other.
  document.getElementById("second").classList.remove("active");
  document.getElementById("first").classList.remove("active");
  document.getElementById("third").classList.add("active");

  //Changing Background color.
  document.body.style.backgroundColor = "#0F3460";
  document.getElementById("clickMe").innerHTML = "Start";
  document.getElementById("Seconds").innerHTML = "00";
  clearInterval(stop);

  //Variables according to the Longbreak.
  document.getElementById("Minutes").innerHTML = 15;
  originalSeconds = 60;
  seconds = 60;
  originalMinutes = 15;
  minutes = 15;
}

//Real function of Pomodoro
let originalMinutes = 25;
let originalSeconds = 60;
var minutes = 25;
var seconds = 60;
let stop;
let startAudio = new Audio("Start.mp3");
let pauseAudio = new Audio("Stop.mp3");
// let timerCompleted = new Audio("FinalRingingSound.mp3");
let timerCompleted = new Audio("Pomodoro-Complete-Sound.mp3");

//Call below function when click on start button
function mainFunction() {
  if (document.getElementById("clickMe").innerHTML === "PAUSE") {
    pauseAudio.play();
    document.getElementById("clickMe").innerHTML = "Start";
    // seconds = 60;
    clearInterval(stop);
  } else {
    // timerCompleted.pause();
    timerCompleted.load();
    startAudio.play();
    document.getElementById("clickMe").innerHTML = "PAUSE";
    stop = setInterval(countDown, 1000);
  }
  return;
}

function countDown() {
  if (seconds != 0) {
    seconds = seconds - 1;
    document.getElementById("Seconds").innerHTML = formatTime(seconds);
  }

  if (minutes == originalMinutes) {
    minutes = minutes - 1;
    document.getElementById("Minutes").innerHTML = formatTime(minutes);
  }

  if (minutes >= 0 && seconds == 0) {
    minutes = minutes - 1;
    seconds = 60;

    document.getElementById("Minutes").innerHTML = formatTime(minutes);
  }
  if (minutes < 0) {
    minutes = originalMinutes;
    document.getElementById("Minutes").innerHTML = originalMinutes;
    document.getElementById("Seconds").innerHTML = "00";
    seconds = 60;
    document.getElementById("clickMe").innerHTML = "Start";
    timerCompleted.play();
    clearInterval(stop);
  }
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}
