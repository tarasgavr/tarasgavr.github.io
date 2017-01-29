$(function() {
  var n = 0;
  $(".panes").click(function() {
    var index = $(this).index();
    $(".text" + n).removeClass('show');
    $(".text" + n).addClass('hide');
    $(".text" + index).removeClass('hide');
    $(".text" + index).addClass('show');
    n = index;
  });
});
