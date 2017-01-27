$(function() {
  $('input').focus(function () {
    var index = $('input').index(this);
    showHint(index);
  })
  $('.info').click(function () {
    showHints();
  })
});
