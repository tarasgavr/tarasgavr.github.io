'use strict'
$(function() {
  var hw = $('#home').html();
  localStorage.setItem("wrapper", '<div class="wrapper">');
  localStorage.setItem("form", '<form action="action.js" method="post">');
  localStorage.setItem("text", '<p class="title">Тест по программированию</p><ul>');
  for (var i = 1; i < 4; i++) {
    localStorage.setItem("list" + i, '<li>Вопрос №' + i);
    for (var j = 1; j < 4; j++) {
      localStorage.setItem("checkbox" + i + j, '<label><input type="checkbox" id="variant' + i + j + '">');
      localStorage.setItem("label" + i + j, 'Вариант ответа №' + j +'</label></li>');
      }
    }
  localStorage.setItem("submit", '</ul><input type="submit" id="submit" value="Проверить мои результаты">');
  localStorage.setItem("endtest", '</form></div>');

  var htmlObj = {
     homework : [
      {text:localStorage.wrapper},
      {text:localStorage.form},
      {text:localStorage.text},
      {text:localStorage.getItem("list1")},
      {text:localStorage.getItem("checkbox11")},
      {text:localStorage.getItem("label11")},
      {text:localStorage.getItem("checkbox12")},
      {text:localStorage.getItem("label12")},
      {text:localStorage.getItem("checkbox13")},
      {text:localStorage.getItem("label13")},
      {text:localStorage.getItem("list2")},
      {text:localStorage.getItem("checkbox21")},
      {text:localStorage.getItem("label21")},
      {text:localStorage.getItem("checkbox22")},
      {text:localStorage.getItem("label22")},
      {text:localStorage.getItem("checkbox23")},
      {text:localStorage.getItem("label23")},
      {text:localStorage.getItem("list3")},
      {text:localStorage.getItem("checkbox31")},
      {text:localStorage.getItem("label31")},
      {text:localStorage.getItem("checkbox32")},
      {text:localStorage.getItem("label32")},
      {text:localStorage.getItem("checkbox33")},
      {text:localStorage.getItem("label33")},
      {text:localStorage.submit},
      {text:localStorage.endtest}
      ]
  }

  var returnObj = localStorage.getItem("wrapper");
  console.log(returnObj);
  var result = tmpl(hw, htmlObj);
  $('body').append(result);
});
