$(function () {
    $('.bars li .bar').each(function (key, bar) {
        const percentage = $(this).data('percentage');
        $(this).animate({
            'height': percentage + '%'
        }, 1000);
    });

});