$(document).ready(function() {

	AOS.init({
		disable: function() {
			var maxWidth= 1024;
			return window.innerWidth < maxWidth;
		}
	});

	$('.c-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});

	function toggleAAccordion (event) {
		const details = $(event.target).closest('.c-accordion__item'),
					content = details.find('.c-accordion__content');

		if (details.hasClass('open')) {
			details.removeClass('open');
			content.slideUp(300);
		} else {
			details.addClass('open');
			content.slideDown(300);
		}
	}

	$('.c-accordion__heading').on('click', toggleAAccordion);

	function parallaxMouseMove(event, el, range) {
		$(el).css({
      transform: "translate("+ event.clientX / range +"px, "+ event.clientY / range + "px)",
      transition: "none"
    });
	};

	$(window).on("mousemove", function(event) {
		parallaxMouseMove(event, '.c-hero__parallax-img--1', 80);
		parallaxMouseMove(event, '.c-hero__parallax-img--2', 200);
		parallaxMouseMove(event, '.c-hero__parallax-img--3', 100);
		parallaxMouseMove(event, '.c-hero__parallax-img--4', 150);
	});

	if($(window).width() < 1024) {
		$(window).off("mousemove");
	}

	function move() {
    var progress = $('.c-about__progress-grayback'),
    		perc = $('.c-about__progress-perc'),
    		max = $('.c-about__progress-wrapper').data('perc');
    var left = 0;
    var id = setInterval(frame, 10);
    
    function frame() {
      if (left >= max) {
          clearInterval(id);
      } else {
          left++;
          progress.css('left', left + '%');
          perc.text(left + '%');
      }
    }
	};

	var whichTransitionEvent = function(){
	  var t;
	  var el = document.createElement('fakeelement');
	  var transitions = {
			'transition':'transitionend',
			'OTransition':'oTransitionEnd',
			'MozTransition':'transitionend',
			'WebkitTransition':'webkitTransitionEnd'
	  };

	  for(t in transitions){
			if( el.style[t] !== undefined ){
			  return transitions[t];
			}
	  }
	};

	var transitionEvent = whichTransitionEvent();

	if(transitionEvent){
		// Set-up transition-start custom event
		if (window.CustomEvent) {
		  var transitionStartEvent = new CustomEvent('transition-start',{'bubbles': true, 'cancelable': true});
		  var transitionEndEvent = new CustomEvent('transition-end',{'bubbles': true, 'cancelable': true});
		} else {
		  var transitionStartEvent = document.createEvent('CustomEvent');
		  var transitionEndEvent = document.createEvent('CustomEvent');
		  transitionStartEvent.initCustomEvent('transition-start', true, true);
		  transitionEndEvent.initCustomEvent('transition-end', true, true);
		}
		document.body.addEventListener(transitionEvent, function(event) {
			// Guard detect and trigger transition start here
	    var target = event.target || event.srcElement;
	    console.log(event.elapsedTime);
	    // FF does not report the exact time here.
			if(event.elapsedTime <= 0.00001){
				event.target.dispatchEvent(transitionStartEvent);
			} else {
				event.target.dispatchEvent(transitionEndEvent);
			}
		});
	}

	$('.c-about__progress-wrapper').on('transition-end', function() {
		move();
	});

});