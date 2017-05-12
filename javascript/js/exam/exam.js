if ($(window).width() != 320) {
  $('.grid').masonry({
    percentPosition: true,
    columnWidth: $('.grid').find('.grid-sizer')[0],
    itemSelector: '.grid-item'
  });
}
$(function() {
    $('.jcarousel').jcarousel({
    center: true,
    list: '.jcarousel-list',
    items: '.jcarousel-item',
    wrap: 'circular',
    animation: {
     duration: 800,
     easing:   'linear',
     complete: function() {
      }
     }
    });
    $('.jcarousel-prev').click(function() {
      $('.jcarousel').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next').click(function() {
      $('.jcarousel').jcarousel('scroll', '+=1');
    });
    if ($(window).width() === 320) {
      $('.mm1').clone().replaceWith($('.mm2'));
      //$('.mm2').clone().replaceWith($('.mm1'));
    }
});
