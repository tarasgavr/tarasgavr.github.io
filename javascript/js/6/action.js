var splitcount = 0;
var ms0 = 0;
var s0 = 0;
var m0 = 0;
var h0 = 0;
var ms, s, m, h, timerId;
var result = [];
function changeButton() {
  if (start.innerHTML === 'START') {
    timerId = setInterval(countTime,1);
    start.innerHTML = 'STOP';
    start.style.backgroundColor = 'red';
  } else {
    clearInterval(timerId);
    start.innerHTML = 'START';
    start.style.backgroundColor = 'green';
  }
}
function splitTime() {
  var ch_ms, ch_s, ch_m, ch_h;
  if (start.innerHTML === 'STOP') {
    splitcount++;
    if (splitcount === 1) {
      ch_ms = ms0; ch_s = s0; ch_m = m0; ch_h = h0;
      ms = ms0; s = s0; m = m0; h = h0;
    } else {
      ch_ms = ms0 - ms; ch_s = s0 - s; ch_m = m0 -m; ch_h = h0 - h;
      ms = ms0; s = s0; m = m0; h = h0;
    }
    result[splitcount] = document.createElement('p');
    setValidTime(result[splitcount], splitcount + ' split : ', ch_h, ch_m, ch_s, ch_ms);
    results.appendChild(result[splitcount])
  }
}
function countTime() {
  ms0++;
  if (ms0 === 1000) {
    ms0 = 0;
    s0++;
    checkSec();
  }
  if (s0 === 60) {
    s0 = 0 + '0';
    m0++;
    checkMin();
  }
  if (m0 === 60) {
    m0 = 0 +'0';
    h0++;
    checkHrs();
  }
  checkMsec();
  setValidTime(timer,'',h0,m0,s0,ms0);
}
function resetCount() {
  clearInterval(timerId);
  deleteInfo();
  start.innerHTML = 'START';
  start.style.backgroundColor = 'green';
  ms0 = 0; s0 = 0; m0 = 0; h0 = 0; splitcount = 0;
  timer.innerHTML = '0'+h0+':0'+m0+':0'+s0+':00'+ms0;
}

start.addEventListener('click',changeButton);
split.addEventListener('click',splitTime);
reset.addEventListener('click',resetCount);
