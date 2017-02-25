'use strict'
$(function() {
  var testStructure = [
    '<div class="wrapper">',
    '<form action="action.js" method="post">',
    '<p class="title">Тест по программированию</p><ul>',
  ]
  for (var i = 1; i < 4; i++) {
  testStructure[i + 3 * i] = '<li>Вопрос №' + i;
    for (var j = 1; j < 4; j++) {
      testStructure[i + 3 * i + j] = '<label id="variant' + i + j + '"><input type="checkbox">Вариант ответа №' + j +'</label></li>';
    }
  }
  testStructure[16] = '</ul><input type="submit" id="submit" value="Проверить мои результаты"></form></div>';
  console.log(testStructure);
  var testJSON = JSON.stringify(testStructure);
  localStorage.setItem('myKey',testJSON);
  var testParse = JSON.parse(localStorage.myKey);
  console.log(testParse);
  var hw = $('#home').html();
  var htmlObj = {
      homework : testParse
   }

  var result = tmpl(hw, htmlObj);
  $('body').append(result);
});
