$(function () {

  $('#dropdown').click(function() {
    $('.first-level-submenu').slideToggle();
  });
  $('#dropright1').click(function() {
    var h = $('.first-level-submenuitem').height();
    $('.second-level-submenu').toggle();
    $('.second-level-submenu').animate({
      opacity: 1,
      fontSize: '-=3',
      left: '90',
      top: '-35'
    }, 5000, function () {
      $(this).css('background-color','#d0b');
    });
    $(this).parent().css('height',h);
  });
  $('#dropright2').click(function() {
    var h = $('.second-level-submenuitem').height();
    $('.third-level-submenu').toggle();
    $('.third-level-submenu').animate({
      opacity: 1,
      fontSize: '-=6',
      left: '145',
      top: '-35'
    }, 5000, function () {
      $(this).css('background-color','#f0d');
    });
    $(this).parent().css('height',h);
  });

  $('.third-level-submenu').mouseout(function () {
    $(this).css('display','none');
    $(this).css('opacity','0');
    $(this).css('font-size','18px');
    $(this).css('left','180');
    $(this).css('top','10');
    $('.first-level-submenu').css('display','none');
    $('.second-level-submenu').css('display','none');
    $('.second-level-submenu').css('opacity','0');
    $('.second-level-submenu').css('font-size','18px');
    $('.second-level-submenu').css('left','180');
    $('.second-level-submenu').css('top','10');
  });

});
