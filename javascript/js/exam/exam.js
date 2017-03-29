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
});
