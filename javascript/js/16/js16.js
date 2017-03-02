$(function () {

  function Human() {
    this.name = 'Marco';
    this.age = 23;
    this.sex = 'male';
    this.weight = 65;
    this.height = 175;
  }

  var newHuman = new Human();
  for (var field in newHuman) {
    var list = document.createElement('li');
    list.innerHTML = field + ' :: ' + newHuman[field];
    $('.Human').append(list);
  }
  function Student() {
    this.studyPlace = 'University of California';
    this.scholarShip = 200;
    this.watchSerials = function () {

    }
  }
  function Worker() {
    this.workPlace = 'National museum';
    this.salary = 350;
    this.work = function () {

    }
  }
  Student.prototype = newHuman;
  Worker.prototype = newHuman;

  var oneStudent = new Student();
  var myStudent = new Student();
  var oneWorker = new Worker();
  var myWorker = new Worker();

  for (var field in oneStudent) {
    var list = document.createElement('li');
    list.innerHTML = field + ' :: ' + oneStudent[field];
    $('.Student').append(list);
  }
  for (var field in oneWorker) {
    var list = document.createElement('li');
    list.innerHTML = field + ' :: ' + oneWorker[field];
    $('.Worker').append(list);
  }

  console.log(oneStudent);
  console.log(myStudent);
  console.log(oneWorker);
  console.log(myWorker);

});
