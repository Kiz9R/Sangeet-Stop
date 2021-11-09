$(document).ready(function(){
$('.side-btn').click(function(){
    $('.side-nav-links').slideToggle(1000);
    $('.side-btn').toggleClass('change')
})
$('.nav-btn').click(function(){
    $('.side-nav').toggleClass('margin');
    $('.nav-btn').toggleClass('change');
    $('main').toggleClass('max-width');
})
/*var owl = $('.songs-center');
owl.owlCarousel({
    loop:true,
    nav:true,
    smartSpeed:1000,
    autoPlay:true,
    autoplayTimeout:1000,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});*/
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
})