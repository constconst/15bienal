$(function() {
    // Carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
        height: 800,
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

// Glider init

window.addEventListener('load', function() {
    document.querySelector('.glider').addEventListener('glider-slide-visible', function(event) {
        var glider = Glider(this);
        console.log('Slide Visible %s', event.detail.slide)
    });
    document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event) {
        console.log('Slide Hidden %s', event.detail.slide)
    });
    document.querySelector('.glider').addEventListener('glider-refresh', function(event) {
        console.log('Refresh')
    });
    document.querySelector('.glider').addEventListener('glider-loaded', function(event) {
        console.log('Loaded')
    });

    window._ = new Glider(document.querySelector('.glider'), {
        slidesToShow: 1, //'auto',
        slidesToScroll: 1,
        draggable: true,
        scrollLock: false,

        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    exactWidth: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    dots: false,
                    arrows: false,
                    scrollLock: true
                }
            }
        ]
    });
});