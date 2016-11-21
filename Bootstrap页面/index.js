var header = $('#header');
var logo = $('.logo-title');
var a = $('.nav-item a');
var uli = $('#header ul').children();
console.log($('#header').outerHeight())
$(document).ready(function(){
    $(window).scroll(function () {
        header.toggleClass('navbar-fixed-top',$(window).scrollTop() > 50)

        uli.click(function(){
            uli.removeClass('actives')
            $(this).addClass('actives')
        })

        if($(window).scrollTop() <=  $('#header').outerHeight()){
            uli.removeClass('actives')
        }

        if($(window).scrollTop() >= $('#header').outerHeight()){
            uli.removeClass('actives')
            uli.eq(1).addClass('actives')
        }
        if($(window).scrollTop() >= $('#features').offset().top - $('#header').outerHeight()){
            uli.removeClass('actives')
            uli.eq(2).addClass('actives')
        }
        if($(window).scrollTop() >= $('#GetStarted').offset().top - $('#header').outerHeight()){
            uli.removeClass('actives')
            uli.eq(3).addClass('actives')
        }
        if($(window).scrollTop() >= $('#docs').offset().top - $('#header').outerHeight()){
            uli.removeClass('actives')
            uli.eq(4).addClass('actives')
        }
        if($(window).scrollTop() >= $('#support').offset().top - $('#header').outerHeight()){
            uli.removeClass('actives')
            uli.eq(5).addClass('actives')
        }
        if($(window).scrollTop() >= $('#support').offset().top - $('#header').outerHeight()){
            uli.removeClass('actives')
            uli.eq(6).addClass('actives')
        }
        });

        $('#a').click(function(){
            $('html body').animate({scrollTop:$('#about').offset().top - $('#header').outerHeight()}, 'slow');
        });
        $('#b').click(function(){
            $('html body').animate({scrollTop:$('#features').offset().top - $('#header').outerHeight()}, 'slow');
        });
        $('#c').click(function(){
            $('html body').animate({scrollTop:$('#GetStarted').offset().top - $('#header').outerHeight()}, 'slow');
        });
        $('#d').click(function(){
            $('html body').animate({scrollTop:$('#docs').offset().top - $('#header').outerHeight()}, 'slow');
        });
        $('#e').click(function(){
            $('html body').animate({scrollTop:$('#support').offset().top - $('#header').outerHeight()}, 'slow');
        });
        $('#f').click(function(){
            $('html body').animate({scrollTop:$('#license').offset().top - $('#header').outerHeight()}, 'slow');
        });
        $('#g').click(function(){
            $('html body').animate({scrollTop:$('#GetStarted').offset().top - $('#header').outerHeight()}, 'slow');
        });
        $('.logo-title').click(function(){
            $('html body').animate({scrollTop:0}, 'slow');
        });
})