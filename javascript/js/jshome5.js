var ms = 0;
var s = 0;
var m = 0;
var h = 0;
var timer;
function changeButton() {
  var start = document.getElementById('start');
  if (start.innerHTML == 'START') {
    timer = setInterval(timeCount,1);
    start.innerHTML = 'PAUSE';
  } else {
    clearInterval(timer);
    start.innerHTML = 'START';
  }
}
function timeCount() {
  ms++;
  if (ms === 1000) {
    ms = 0;
    s++;
    if (s < 10) {
      s = '0' + s;
    }
    document.getElementById('sec').innerHTML = s;
  }
  if (s === 60) {
    s = 0 + '0';
    m++;
    if (m < 10) {
      m = '0' + m;
    }
    document.getElementById('min').innerHTML = m;
  }
  if (m === 60) {
    m = 0 + '0';
    h++;
    if (h < 10) {
      h = '0' + h;
    }
    document.getElementById('hrs').innerHTML = h;
  }
  document.getElementById('msec').innerHTML = ms;
}
function stopCount() {
  clearInterval(timer);
  document.getElementById('sec').innerHTML = '00';
  document.getElementById('min').innerHTML = '00';
  document.getElementById('hrs').innerHTML = '00';
  document.getElementById('msec').innerHTML = '0';
  document.getElementById('start').innerHTML = 'START';
  ms = 0; s = 0; m = 0; h = 0;
}

var start = document.getElementById('start');
start.addEventListener('click',changeButton);
var stop = document.getElementById('stop');
stop.addEventListener('click',stopCount);
