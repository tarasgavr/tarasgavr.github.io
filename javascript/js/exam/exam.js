if ($(window).width() != 320) {
  $('.grid').masonry({
    percentPosition: true,
    columnWidth: $grid.find('.grid-sizer')[0],
    itemSelector: '.grid-item'
  });
} else {
  $('.img-partner2').attr('src',"img/URLAUBSGLUCK_Landing_Desktop-partner3.jpg");
  console.log($('.img-partner2'));
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
});
