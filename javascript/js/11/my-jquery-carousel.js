(function($) {
  $.fn.myCarousel = function() {
    var leftUIEl = $('.myCarousel-button-left');
    var rightUIEl = $('.myCarousel-button-right');
    var elementsList = $('.myCarousel-menu');

    var pixelsOffset = 90;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var carouselOffset = - ((elementsCount - 2) * pixelsOffset);

   leftUIEl.click(function() {
       if (currentLeftValue != 0) {
           currentLeftValue += pixelsOffset;
           elementsList.animate({ left : currentLeftValue + "px"}, 500);
       }
   });

   rightUIEl.click(function() {
       if (currentLeftValue != carouselOffset) {
           currentLeftValue -= pixelsOffset;
           elementsList.animate({ left : currentLeftValue + "px"}, 500);
       }
   });

  };
})(jQuery);
