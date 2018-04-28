
$(document).ready(function() {
   // $('.mobile-menu').click(function(){
//		$('.menu-list').slideToggle();
//   });	
  $('.progress-bar li a').click(function(){
	var activeStep = $(this).attr('rel');
	$(this).parent('li').addClass('active');
	$(this).parent('li').prevAll('li').addClass('active');
	$(this).parent('li').nextAll('li').removeClass('active');
	$('.step-wrap > div').hide(); 
	$('.'+activeStep).show()
	 
	})
	
	
 
  $(window).scroll(function() {
		var vh = $(window).scrollTop();
		if (vh >= 100) {
			$("body").addClass('fixed');

		} else {
			$("body").removeClass('fixed')
		}

	})
	var ph = $(document).height();
	
	wh =$(window).height();
	
  $(window).scroll(function () {
	  
        if ($(this).scrollTop() > wh && $(this).scrollTop() < ph/2) {
			$('.scroll-down').fadeIn();
        } else {
            $('.scroll-down').fadeOut();
			 
        }
		
		if ($(this).scrollTop() > ph/2) {
           $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
	
	 $('.scroll-down').click(function () {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 600);
        return false;
    });
			
 

});


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline ='May 15 2018 00:00:50 UTC+0200';
initializeClock('clockdiv', deadline);