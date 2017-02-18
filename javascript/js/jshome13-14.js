var div = document.createElement('div');
div.className = "wrapper";
var formTest = document.createElement('form');
formTest.setAttribute('action','#');
formTest.setAttribute('method','post');
div.appendChild(formTest);
var testText = document.createElement('p');
testText.className = 'title';
testText.appendChild(document.createTextNode('Тест по программированию'));
formTest.appendChild(testText);
var numList = document.createElement('ol');
formTest.appendChild(numList);
for (var i = 1; i < 4; i++) {
  var numListItem = document.createElement('li');
  numListItem.setAttribute('style','padding-top: 10px;')
  numListItem.appendChild(document.createTextNode('Вопрос №' + i));
  for (var j = 1; j < 4; j++) {
    var label = document.createElement('label');
    var newNode = document.createElement('input');
    newNode.setAttribute('type','checkbox');
    newNode.setAttribute('id','variant' + i + j);
    var text = document.createTextNode('Вариант вопроса №' + j)
    label.appendChild(text);
    label.insertBefore(newNode,text);
    numListItem.appendChild(label);
  }
  numList.appendChild(numListItem);
}
var button = document.createElement('input');
button.setAttribute('type','submit');
button.setAttribute('value','Проверить мои результаты');
formTest.appendChild(button);

document.body.appendChild(div);
