var div = $('<div></div>');
div.addClass("wrapper");
var formTest = $('<form></form>');
formTest.attr('action','#');
formTest.attr('method','post');
div.append(formTest);
var testText = $('<p></p>');
testText.addClass('title');
testText.html('Тест по программированию');
formTest.append(testText);
var numList = $('<ol></ol>');
formTest.append(numList);
for (var i = 1; i < 4; i++) {
  var numListItem = $('<li></li>');
  numListItem.html('Вопрос №' + i);
  for (var j = 1; j < 4; j++) {
    var label = $('<label></label>');
    var newNode = $('<input></input>');
    newNode.attr('type','checkbox');
    newNode.attr('id','variant' + i + j);
    label.append(newNode);
    label.html('Вариант вопроса №' + j);
    numListItem.append(label);
  }
  numList.append(numListItem);
}
var button = $('<input></input>');
button.attr('type','submit');
button.attr('value','Проверить мои результаты');
formTest.append(button);
$('body').append(div);
