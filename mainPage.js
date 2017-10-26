$(document).ready(function(){

    //слайдер
    $('*[data-toggle=tooltip]').tooltip();

    $('.owl-carousel-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout: 8000,
        autoplaySpeed:2000,
        dotsSpeed:2000,
        dragEndSpeed:2000,
        nav:false,
        dots: true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            }
        }
    });


    //цифры
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа

        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 4000
            });

            show = false;
        }
    });
});