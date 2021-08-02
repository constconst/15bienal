$(function() {
    // Carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    // Hidden nav
    var prev = 0;
    var $window = $(window);
    var hiddennav = $('.header__container-hidden');

    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        hiddennav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
    });

    // open mobile menu
    $('.js-toggle-menu').click(function(e) {
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).toggleClass('open');
    });
});