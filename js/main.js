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
            bannerSwiper.autoplay.stop();
        } else {
            bannerSwiper.autoplay.start();
        }
    });
    $('.stop-button2').click(function () {
        $(this).toggleClass('start');
    
        if ($(this).hasClass('start')) {
            textSwiper.autoplay.stop();
        } else {
            textSwiper.autoplay.start();
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
$(".fixed-button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});
$(".menu").click(function () {
    $(".menu .event").toggle();
    $(".menu .default").toggle();
    $(".gnb").toggle();
});
$(document).ready(function () {
    $(".depth2 > li > p").click(function() {
        let target = $(this).siblings(".depth3");
        $(".depth3").not(target).slideUp();
        target.stop().slideToggle();
    });
});

$('a').click(function(e){
    e.preventDefault();
})
});