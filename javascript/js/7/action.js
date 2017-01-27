$(function() {
  $(".link").click(function(e) {
  var index = $(".panes").index(this);
  e.preventDefault;
  console.log(index);
  $("#text" + index).css('display','block');
  });
});
