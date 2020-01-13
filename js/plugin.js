/*global $, document*/

$(document).ready(function () {
    'use strict';

    //Adjust Header Height
    var header = $('.header'),
        slider = $('.slider');

    header.height($(window).height());

    // Customize The Slider
    $(window).resize(function () {
        header.height($(window).height());
        slider.each(function () {
            $(this).css({
                paddingTop: (($(window).height() - $('.slider div').height()) / 2)
    
            })
        })
    });



    // Add Active Class To The Links List

    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })

    //Trigger The Bx Slider

    $('.slider').bxSlider();

    // Customize The Slider

    slider.each(function () {
        $(this).css({
            paddingTop: (($(window).height() - $('.slider div').height()) / 2)

        })
    })


    // Start Smooth Scroll

    $('.links li').click(function () {
        var variableScroll = $(this).data('scroll');
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        })

    })

    //Slide The Testimonials

    function autoChangeSlider() {
        $('.speech .the-speech.active').each(function () {
            if (!$(this).is(':last-of-type')) {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    autoChangeSlider()
                })
            } else {
                $(this).removeClass('active');
                $('.speech .the-speech').eq(0).addClass('active').fadeIn(1000);
                autoChangeSlider()
            }
        })
    }

    autoChangeSlider();


    // start shuffle Portfolio / filter

    $('.portfolio .buttons span').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

    //Instantiate NiceScroll

    $('html').niceScroll({
        //Adjust At The NiceScroll Bar
        cursorcolor: '#e29c47',
        cursorwidth: '10px',
        zindex: 1,
        cursorborder: 'none',
        cursorborderradius: 0,
        cursoropacitymax: .9

    });

    //Instantiate MixItUp

    var mixer = mixitup('#container')

    

})

