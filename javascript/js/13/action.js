$(function () {
  var testNote = 0;
  $('body').on('click', '#submit', function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400,
      function(){
        $('#modal_form')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      });
      if (testNote === 99) {
        testNote = 100;
      }
      $('#test_result').text('Вы получили ' + testNote + ' баллов');
      if (testNote >= 66) {
        $('#passed').text('Вы прошли тест!');
      } else {
        $('#passed').text('Вы провалили тест!');
      }
    });
    $('#modal_close, #overlay').click( function(){
      $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,
      function(){
        $(this).css('display', 'none');
        $('#overlay').fadeOut(400);
      });
      testNote = 0;
      $('input[type=checkbox]').prop({'checked': false});
    });
    $('body').one('mousedown', '#variant12', function(){
      testNote += 33;
    });
    $('body').one('mousedown', '#variant23', function(){
      testNote += 33;
    });
    $('body').one('mousedown', '#variant32', function(){
      testNote += 33;
    });
});
