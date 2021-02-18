

const timer = document.getElementById('timer');

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function func2()
{
    if(btn2.classList.contains('start')){
        startTimer();
        btn2.innerHTML = "Stop";
        btn2.classList.remove("start");
        btn2.classList.add("stop");
    }

    else if(btn2.classList.contains('stop'))
    {
        stopTimer();
        btn1.innerHTML = "Reset";
        btn1.classList.remove("lap");
        btn1.classList.add("restart");
    }
}

var list = [];

function func1()
{
     if(btn1.classList.contains('lap')){
        var a = document.getElementById("timer").textContent;
        list.unshift(a);
        var text = '<ul class="list-group">';
        var i;
        for (i = 0; i < list.length; i++) {
        text += '<li class="list-group-item">' + list[i] + "<li>";
            }
            text += "<ul>";
        document.getElementById("ls").innerHTML = text;
        
    }

    else if(btn1.classList.contains('restart'))
    {
        resetTimer();
        btn2.innerHTML = "Start";
        btn2.classList.remove("stop");
        btn2.classList.add("start");

        btn1.innerHTML = "Lap";
        btn1.classList.remove("restart");
        btn1.classList.add("lap");

        hr = 0;
        min = 0;
        sec = 0;
        stoptime = true;

        document.getElementById("ls").innerHTML = "";
        list.splice(0, list.length);
    }
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}


