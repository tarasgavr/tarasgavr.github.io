function showHint(n) {
    $('.help' + n).toggleClass('visible');
}
function showHints() {
  for (var i = 0; i < 3; i++) {
     $('.help' + i).toggleClass('visible');
  }
}
