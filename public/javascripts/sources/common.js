$(document).ready(function() {

	AOS.init();

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

	function move() {
    var progress = $('.c-about__progress-grayback'),
    		perc = $('.c-about__progress-perc'); 
    var left = 0;
    var id = setInterval(frame, 10);
    
    function frame() {
      if (left >= 95) {
          clearInterval(id);
      } else {
          left++;
          progress.css('left', left + '%');
          perc.text(left + '%');
      }
    }
	}

	$('.c-about__progress-wrapper')[0].addEventListener('transitionend', function(e) {
			if(e.propertyName === 'opacity') {
				move();
			}
		})
});