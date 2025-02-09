$(function() {
    $(function() {
    $('.depth1 > li').mouseenter(function() {
        $(this).find('.navbg').stop().slideDown();
    }).mouseleave(function() {
        $(this).find('.navbg').stop().slideUp();
    });
});
    $('.depth1').mouseleave(function(){
        $('.navbg').stop().hide();
    })
    
    $('.stop-button').click(function () {
        $(this).toggleClass('start');
    
        if ($(this).hasClass('start')) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    });
    $('.stop-button2').click(function () {
        $(this).toggleClass('start');
    
        if ($(this).hasClass('start')) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    });
    $('.family-site').click(function(){
        $('.family-list').stop().toggle()
    })
    $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('.header').addClass('blurred');
    } else {
        $('.header').removeClass('blurred');
    }
});
});