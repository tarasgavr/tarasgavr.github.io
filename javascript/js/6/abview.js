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
