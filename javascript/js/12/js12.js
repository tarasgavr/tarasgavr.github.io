$(function() {
  var hw = $('#home').html();
  data = {
    homework : [
      {text:'<div class="wrapper">'},
      {text:'<h1>ГАВРИЛОВ ТАРАС НИКОЛАЕВИЧ</h1>'},
      {text:'<img src="img/fotto.jpg" alt="мое фото">'},
      {text:'<p>Аспирант Университета &lt;Украина&gt;, 31 год</p>'},
      {text:'<div class="line"></div>'},
      {text:'<h4>Хочу учить Frontend, потому что это</h4>'},
      {text:'<ul><li>высокие зарплаты</li>'},
      {text:'<li>современные методы программирования</li>'},
      {text:'<li>бесценный опыт</li></ul>'},
      {text:'<div class="line"></div>'},
      {text:'<h4>Мой контактный телефон</h4>'},
      {text:'<p>+380504430456</p>'},
      {text:'<h4>Мой профиль на Фейсбук</h4>'},
      {text:'<a href="https://www.facebook.com/profile.php?id=100006321227138" target="_blank">Фейсбук</a>'},
      {text:'<div class="line"></div>'},
      {text:'<h4>Мой фидбек</h4>'},
      {text:'<p>Знаю французский язык, программирую на делфи, изучаю астрологию</p></div>'}
    ]
  }
  result = tmpl(hw, data);
  $('body').append(result);
});
