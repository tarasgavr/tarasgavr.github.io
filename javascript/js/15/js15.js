jQuery(function () {

  $('.search_button').click(function (event) {
    event.preventDefault();
    $('li').detach();
    var query = $('.query_field').val();
    var API_KEY = '4681253-a7427a238f577652160f85a4e';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+query;
    $.getJSON(URL, function(data) {
      if (parseInt(data.totalHits) > 0) {
        $.each(data.hits, function(i, hit){
            var list = document.createElement('li');
            $('#list-links').append(list);
            var link = document.createElement('a');
            link.innerHTML = 'Автор данного фото ' + hit.user + '. Ключевые слова к фото ' + hit.tags;
            list.append(link);
            var list1 = document.createElement('li');
            $('#list-images').append(list1);
            var im = document.createElement('img');
            im.setAttribute('src',hit.previewURL);
            list1.append(im);
        });
      } else {
        var list = document.createElement('li');
        $('#list-links').append(list);
        var link = document.createElement('a');
        link.innerHTML = 'Ключевое слово "' + query + '" не найдено!';
        list.append(link);
      }
    });
  });

});
