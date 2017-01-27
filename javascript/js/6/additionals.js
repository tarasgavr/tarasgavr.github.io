function checkSec() {
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
