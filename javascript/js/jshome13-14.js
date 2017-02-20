'use strict'
$(function() {
  var htmlObj = {
    div : {class : 'wrapper'},
    form : {action : '#', method : 'post'},
    p : {class : 'title', text : 'Тест по программированию'},
    // ol : {
    //   li : {
    //     label : {
    //       input : {type : 'checkbox', id : }
    //     }
    //   }
    // }
  }
  var jsonObj = JSON.stringify(htmlObj);
  localStorage.setItem("myKey", jsonObj);
  var returnObj = JSON.parse(localStorage.getItem("myKey"));
  console.log(returnObj);
  // var hw = $('#home').html();
  // var data = {
  //    homework : [
  //     {text:'<div class="wrapper">'},
  //     {text:'<h1>ГАВРИЛОВ ТАРАС НИКОЛАЕВИЧ</h1>'},
  //     {text:'<img src="img/fotto.jpg" alt="мое фото">'},
  //     {text:'<p>Аспирант Университета &lt;Украина&gt;, 31 год</p>'},
  //     {text:'<div class="line"></div>'},
  //     {text:'<h4>Хочу учить Frontend, потому что это</h4>'},
  //     {text:'<ul><li>высокие зарплаты</li>'},
  //     {text:'<li>современные методы программирования</li>'},
  //     {text:'<li>бесценный опыт</li></ul>'},
  //     {text:'<div class="line"></div>'},
  //     {text:'<h4>Мой контактный телефон</h4>'},
  //     {text:'<p>+380504430456</p>'},
  //     {text:'<h4>Мой профиль на Фейсбук</h4>'},
  //     {text:'<a href="https://www.facebook.com/profile.php?id=100006321227138" target="_blank">Фейсбук</a>'},
  //     {text:'<div class="line"></div>'},
  //     {text:'<h4>Мой фидбек</h4>'},
  //     {text:'<p>Знаю французский язык, программирую на делфи, изучаю астрологию</p></div>'}
  //   ]
  // }
  // result = tmpl(hw, returnObj);
  // $('body').append(result);
});
// var div = $('<div></div>');
// div.addClass("wrapper");
// var formTest = $('<form></form>');
// formTest.attr('action','#');
// formTest.attr('method','post');
// div.append(formTest);
// var testText = $('<p></p>');
// testText.addClass('title');
// testText.html('Тест по программированию');
// formTest.append(testText);
// var numList = $('<ol></ol>');
// formTest.append(numList);
// for (var i = 1; i < 4; i++) {
//   var numListItem = $('<li></li>');
//   numListItem.html('Вопрос №' + i);
//   for (var j = 1; j < 4; j++) {
//     var label = $('<label></label>');
//     var newNode = $('<input></input>');
//     newNode.attr('type','checkbox');
//     newNode.attr('id','variant' + i + j);
//     label.html('Вариант вопроса №' + j);
//     label.prepend(newNode);
//     numListItem.append(label);
//   }
//   numList.append(numListItem);
// }
// var button = $('<input></input>');
// button.attr('type','submit');
// button.attr('value','Проверить мои результаты');
// formTest.append(button);
// $('body').append(div);
