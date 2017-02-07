jQuery(document).ready(function() {
  jQuery(".niceCheck").mousedown(function() {
     changeCheck(jQuery(this));
  });
  jQuery(".niceCheck").each(function() {
     changeCheckStart(jQuery(this));
  });
});
function changeCheck(el) {
       if(!el.attr("checked")) {
         el.css("background-position","0 17px");
         el.attr("checked", true)
       } else {
         el.css("background-position","0 0");
         el.attr("checked", false)
       }
     return true;
}
function changeCheckStart(el)	{
      if(!el.attr("checked")) {
         el.css("background-position","0 17px");
      }
     return true;
}
