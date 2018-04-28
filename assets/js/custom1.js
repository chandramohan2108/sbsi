$(document).ready(function() {
    $('.mobile-menu').click(function() {
        $('.menu-list').slideToggle();
    });
    if($('body').hasClass('admin-bar')){
		$('html').addClass('admin-user');
		}

    $(window).scroll(function() {
        var vh = $(window).scrollTop();
        if (vh >= 100) {
            $("body").addClass('fixed');

        } else {
            $("body").removeClass('fixed')
        }

    })
    var ph = $(document).height();

    wh = $(window).height();

    $(window).scroll(function() {

        if ($(this).scrollTop() > wh && $(this).scrollTop() < ph / 2) {
            $('.scroll-down').fadeIn();
        } else {
            $('.scroll-down').fadeOut();

        }

        if ($(this).scrollTop() > ph / 2) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.scroll-down').click(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 600);
        return false;
    });
	
 function stricky(){
	 var fH = $('.footer').outerHeight();
	
	 $('body').css('margin-bottom',fH);
	 
	 
	 }
setTimeout(function(){stricky()},2000);
$(window).resize(function(){
	
		setTimeout(function(){stricky()},2000);
	 
	})

$('.read-btn').click(function(){
	$('.tab1').hide();
	$('.tab2').slideDown();
	
	})

});