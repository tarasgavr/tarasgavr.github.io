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
    $('.grid').masonry({
      percentPosition: true,
      columnWidth: $grid.find('.grid-sizer')[0],
      itemSelector: '.grid-item'
    });
    if (window.innerWidth === 320) {
      document.getElementsByClassName('.img-partner2').setAttribute('src','img/URLAUBSGLUCK_Landing_Desktop-partner3.jpg');
      document.getElementsByClassName('.img-partner3').setAttribute('src','img/URLAUBSGLUCK_Landing_Desktop-partner2.jpg');
    }
});
