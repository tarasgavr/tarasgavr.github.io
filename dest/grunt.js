var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
var timer = document.createElement('div')
timer.id = 'timer';
timer.innerHTML =  '00:00:00:000';
wrapper.appendChild(timer);
var start = document.createElement('button');
start.id = 'start';
start.innerHTML = 'START';
wrapper.appendChild(start);
var split = document.createElement('button');
split.id = 'split';
split.innerHTML = 'SPLIT';
wrapper.appendChild(split);
var reset = document.createElement('button');
reset.id = 'reset';
reset.innerHTML = 'RESET';
wrapper.appendChild(reset);
var results = document.createElement('div');
results.id = 'results';
wrapper.appendChild(results);

document.body.appendChild(wrapper);
;var splitcount = 0;
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
console.log('01:08:45:456 = ' + convertTimeDown(convertTimeUp(1,8,45,456)));
console.log('01:08:45:456 = ' + convertTimeUp(1,8,45,456));
start.addEventListener('click',changeButton);
split.addEventListener('click',splitTime);
reset.addEventListener('click',resetCount);
;function checkSec() {
  if (s0 < 10) {
    s0 = '0' + s0;
  }
}
function checkMin() {
  if (m0 < 10) {
    m0 = '0' + m0;
  }
}
function checkHrs() {
  if (h0 < 10) {
    h0 = '0' + h0;
  }
}
function checkMsec() {
  if (ms0 < 10) {
    ms0 = '00' + ms0;
  }
  if ((ms0 > 10) && (ms0 < 100)) {
    ms0 = '0' + ms0;
  }
}
function setValidTime(Obj, text, hrs, min, sec, msec) {
  if ((hrs === 0) && (min === 0) && (sec === 0)) {
    Obj.innerHTML = text + '00:00:00:'+msec;
  } else {
    if ((hrs === 0) && (min === 0)) {
      Obj.innerHTML = text + '00:00:'+sec+':'+msec;
    } else {
      if (hrs === 0) {
        Obj.innerHTML = text + '00:'+min+':'+sec+':'+msec;
      } else {
        Obj.innerHTML = text + hrs+':'+min+':'+sec+':'+msec;
      }
    }
  }
}
function deleteInfo() {
  for (var i = 1; i <= splitcount; i++) {
    results.removeChild(result[i]);
  }
}
function convertTimeUp(hrs, min, sec, msec) {
  var res;
  if ((sec === 0) && (min === 0) && (hrs === 0)) {
    res = msec;
  } else {
    if ((sec > 0) && (min === 0) && (hrs === 0)) {
      res = msec + sec * 1000;
    } else {
      if ((sec === 0) && (min > 0) && (hrs === 0)) {
        res = msec + min * 60000;
      } else {
        if ((sec === 0) && (min === 0) && (hrs > 0)) {
          res = msec + hrs * 3600000;
        } else {
          if ((sec > 0) && (min > 0) && (hrs === 0)) {
            res = msec + sec * 1000 + min * 60000;
          } else {
            res = msec + sec * 1000 + min * 60000 + hrs * 3600000;
          }
        }
      }
    }
  }
  return res;
}
function convertTimeDown(sum) {
  var res, res2, res3, res4, res5, res6;
  if (sum < 1000) {
    res = '00:00:00:' + sum;
  } else {
    if (sum < 60000) {
      res = '00:00:' + Math.floor(sum / 1000) + ':' + sum % 1000;
    } else {
      if (sum < 3600000) {
        res2 = sum / 60000; res3 = sum - Math.floor(res2) * 60000;
        res = '00:' + Math.floor(res2) + ':' + Math.floor(res3 / 1000) + ':' + sum - Math.floor(res2) * 60000 - Math.floor(res3 / 1000) * 1000;
      } else {
        res4 = sum / 3600000; res5 = sum - Math.floor(res4) * 3600000; res6 = res5 - Math.floor(res5 / 60000) * 60000;
        res = Math.floor(res4) + ':' + Math.floor(res5 / 60000) + ':' + Math.floor(res6 / 1000) + ':' + sum - Math.floor(res4) * 3600000 - Math.floor(res5) * 60000 - Math.floor(res6 / 1000) * 1000;
      }
    }
  }
  return res;
}
