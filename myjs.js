// Кнопка наверх

$(document).ready(function () {
    $(document.body).append('<a id="back_top" href="#"></a>');
    $('#back_top').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('#back_top').fadeIn('slow');
        } else {
            $('#back_top').fadeOut('slow');
        };
    });

    $('#back_top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        $('#back_top').fadeOut('slow').stop();
    });

});



// Фильтрация для input

$('http://frp45.ru/js/input.num').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
});

// Прилипание меню

$(window).scroll(function () {
    if ($(this).scrollTop() > 42) {
        $('.sticky').addClass('sticky-top');
    } 
    else {
        $('.sticky').removeClass('sticky-top');
    }
});