  $(function() {
        $('#selector').pagination({
            items: 10,
            itemsOnPage: 3,
            cssStyle: 'light-theme',
            onPageClick: function(pageNumber){test(pageNumber)}
        });
    });