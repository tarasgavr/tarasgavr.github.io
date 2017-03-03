$(function () {

  function Human(name, age, sex, height, weight) {
    this.name = name || 'Marco';
    this.age = age || 23;
    this.sex = sex || 'male';
    this.height = height || 175;
    this.weight = weight || 65;
  }

  var newHuman = new Human('Fil', 15, 'male', 150, 58);
  for (var field in newHuman) {
    var list = document.createElement('li');
    list.innerHTML = field + ' :: ' + newHuman[field];
    $('.Human').append(list);
  }
  function Student(name, age, sex, height, weight, studyPlace, scholarShip) {
    Human.call(this, name, age, sex, height, weight);
    this.studyPlace = studyPlace || 'University of California';
    this.scholarShip = scholarShip || 200;
    this.watchSerials = function () {

    }
  }
  function Worker(name, age, sex, height, weight, workPlace, salary) {
    Human.call(this, name, age, sex, height, weight);
    this.workPlace = workPlace || 'National museum';
    this.salary = salary || 350;
    this.work = function () {

    }
  }
  Student.prototype = new Human();
  Worker.prototype = new Human();

  var oneStudent = new Student('Alex', 19, 'male', 180, 70, 'PTU', 700);
  var myStudent = new Student('Sophie', 21, 'female', 163, 58, 'Yale', 950);
  var oneWorker = new Worker('Michelle', 42, 'female', 172, 63, 'MAN', 1000);
  var myWorker = new Worker('Nicola', 54, 'male', 180, 98, 'ROCKNES', 1500);

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
