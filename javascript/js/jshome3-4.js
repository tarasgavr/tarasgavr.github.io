document.body.setAttribute('style','margin: 0;')
var div = document.createElement('div');
div.className = "wrapper";
div.setAttribute('style','margin: auto; padding: 0 50px; height: 600px; width: 800px;');
var formTest = document.createElement('form');
formTest.setAttribute('action','#');
formTest.setAttribute('method','post');
div.appendChild(formTest);
var testText = document.createElement('p');
testText.className = 'title';
testText.setAttribute('style','font-family: Tahoma, sans-serif; font-size: 22px; text-align: center; color: black;');
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
    label.setAttribute('style','display: block; width:164px; padding-top: 10px;');
    var newNode = document.createElement('input');
    newNode.setAttribute('type','checkbox');
    newNode.setAttribute('id','variant' + j);
    newNode.setAttribute('style','display: inline-block; height: 12px; width: 12px; background-color: #cbe2f4; border: 2px solid #637079;');
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
button.setAttribute('style','display: block; margin: 0 auto; height: 50px; width: 295px; background-color: #cbe2f4; border: 2px solid #637079; font-size: 18px;');
formTest.appendChild(button);

document.body.appendChild(div);
