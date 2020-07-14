// Clone Header

$(document).ready(function(){

    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));


    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 350));
    });



    //masonry- parallax


    $('.grid').masonry({
        //options
        itemSelector: '.grid-item',
        columWidth: 200,
        fitWidth: true,
        gutter:2,
        horizontalOrder: false
       
    });


//menu renspnsive

var  body = $('body');
var manuTrigger = $('.js-menu-trigger');
var mainOverlay = $('.js-main-overlay');

manuTrigger.on('click', function(){
    body.addClass('manu-is-active');

});

mainOverlay.on('click', function(){
    body.removeClass('manu-is-active');

});

    $('.menu li a').on('click', function(){
        $('body').removeClass("menu-is-active");
    })

});






